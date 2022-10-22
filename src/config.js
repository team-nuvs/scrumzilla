import { storage } from '@forge/api';
import api, { route } from "@forge/api";

import API from './api';

var _ = require('lodash');
var customApi = new API();

class Config {

    //subject to change var.
    BOARD_ID = 1;

    //top level
    async checkAndUpdate(projectId){
        const checkStatus = await Promise.all(
            [
                this.checkAndUpdateFields(),
                this.checkAndUpdateActiveSprintData(projectId),
                this.checkAndUpdateActiveSprintUsers(projectId)
            ]
        ).then(res=>{
            console.log("config : checkAndUpdate completed.")
            if(res[0] != 1)
                return res[0];
            return 1;
        })
        return checkStatus;
    }

    //reset
    async resetAllStoredData(projectId){
        await Promise.all([
            storage.delete('activeSprintId'+projectId),
            storage.delete('STORYPOINT_FIELDNAME'+projectId),
            storage.delete('defaultSprintpoint'+projectId),
            storage.delete('userData'+projectId),
            storage.delete('sprintStorypoint'+projectId),
            storage.delete('standupDetails'+projectId),
        ]).then(res=>console.log("config : reset all data. for project "+projectId));
        return 1;
    }
    // low level 
    async checkAndUpdateActiveSprintData(projectId) {
        console.log(`config : checkAndUpdateActiveSprintData()...`);
        //todo dynamic board id / project id. make api call >filter project id (from payload.)
        const currentBoardId = await customApi.getCurrentBoardId(projectId);
        console.log(`current board id ${currentBoardId}`);
        let response = await api.asApp().requestJira(route`/rest/agile/1.0/board/${currentBoardId}/sprint`, {
            headers: {
                'Accept': 'application/json'
            }
        });

        let allSprints = await response.json();
        let ApiActiveSprintId = _.filter(allSprints.values, { state: 'active' })[0].id;

        let storedActiveSprintId = await storage.get('activeSprintId'+projectId);

        if (storedActiveSprintId != ApiActiveSprintId) {
            storage.set('activeSprintId'+projectId, ApiActiveSprintId);

            let storedUserData = await storage.get('userData'+projectId);

            if(storedActiveSprintId != undefined){

                storedUserData.forEach(user => {
                    user.totalSprints++;
                });
                
                await storage.set('userData'+projectId, storedUserData);
            }
                
            console.log(`config : new sprint id ${ApiActiveSprintId} and storedUserData updated!`);
        }

        let defaultSP = await storage.get('defaultStorypoint'+projectId);
        if(!defaultSP){
            await this.updateDefaultStorypoint(12,projectId);
            console.log("config - sprint storypoint limit set to 20 (default).");
        }
        return 1;
    }

    async checkAndUpdateActiveSprintUsers(projectId) {
        console.log(`config : checkAndUpdateActiveSprintUsers()...`);

        let users = await customApi.getSprintUsers();
        let storageUser = await storage.get('userData'+projectId);

        
        if (storageUser == undefined) {
            let newStorageUser = [];
            
            users.forEach(user => {
                let mockUserData = {
                    accountId: user.accountId,
                    displayName: user.displayName,
                    totalSprints: 1,
                    totalIssuesAssigned: 0,
                    total_storypoints: 0,
                    labels: {}
                };
                newStorageUser.push(mockUserData);
            });

            await storage.set('userData'+projectId,newStorageUser);
            console.log(`config : new - userData added / usercount - ${newStorageUser.length}` );
            return 1;

        }

        if(users.length != storageUser.length){
            console.log("config : updating userData...");
            
            let storageUserMap = new Map();

            storageUser.forEach(user =>{
                storageUserMap.set(user.accountId,user);
            })

            let updatedStorageUser = [...storageUser];
            users.forEach(user => {
                if(!storageUserMap.has(user.accountId)){
                    let mockUserData = {
                        accountId: user.accountId,
                        displayName: user.displayName,
                        totalSprints: 1,
                        totalIssuesAssigned: 0,
                        total_storypoints: 0,
                        labels: {}
                    };
                    updatedStorageUser.push(mockUserData);
                    console.log(`config - update : user ${mockUserData.displayName} added.`);
                }

            });

            await storage.set('userData'+projectId,updatedStorageUser);
            console.log('config - storage userData updated.');
            return 1;
        }

        console.log("config - unchanged userData. (wrt to count!)");
        return 0;
    }
    
    async updateDefaultStorypoint(value,projectId){
        await storage.set('defaultStorypoint'+projectId,value);
        return 1;
    }

    async checkAndUpdateFields(){
        console.log(`config : checkAndUpdateFields()...`);

        // assuming fields not getting changed in between the project cycle...
        let storageStorypointField = await storage.get('STORYPOINT_FIELDNAME');
        if(storageStorypointField){
            console.log("config : required fields are present. (wrt to storage!)");
            return 1;
        }
        
        let fields = await customApi.getFields();
        
        let storypointField = fields.filter(field => field.name == "Story point estimate");
        if(storypointField.length){
            //check for label field
            let label = fields.filter(field => field.name == "Labels");
            if(label.length){
                await storage.set("STORYPOINT_FIELDNAME",storypointField[0].key);
                console.log("config : required fields are present and configured in the storage data.");
                return 1;
            }
            console.log("~ config : labels are not present in the field!");
            return {error : "Make sure Lables are present in the issue fields!"};
        }
        
        console.log("~ config : story point fields is not present in the field!");
        return {error : "Make sure Story Point Estimation and Labels are present in the issue fields!"};
        return 1;
    }
}

export default Config;