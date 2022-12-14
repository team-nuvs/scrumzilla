import { storage } from '@forge/api';
import api, { route } from "@forge/api";

import API from './api';

var _ = require('lodash');

class Config {
    
    customApi;
    PROJECT_ID = null;
    
    constructor(projectId){
        this.customApi = new API(projectId)
        this.PROJECT_ID = projectId;
    }

    //top level
    async checkAndUpdate(){
        const checkStatus = await Promise.all(
            [
                this.checkAndUpdateFields(),
                this.checkAndUpdateActiveSprintData(),
                this.checkAndUpdateActiveSprintUsers()
            ]
        ).then(res=>{
            console.log("config : checkAndUpdate completed.")
            if(res[0] != 1)
                return res[0];
            if(res[1] != 1)
                return res[1];
            return 1;
        })
        return checkStatus;
    }

    //reset
    async resetAllStoredData(){
        await Promise.all([
            storage.delete('activeSprintId'+`_${this.PROJECT_ID}`),
            storage.delete('STORYPOINT_FIELDNAME'),
            storage.delete('defaultSprintpoint'+`_${this.PROJECT_ID}`),
            storage.delete('userData'+`_${this.PROJECT_ID}`),
            storage.delete('sprintStorypoint'+`_${this.PROJECT_ID}`),
            storage.delete('standupDetails'+`_${this.PROJECT_ID}`),
        ]).then(res=>console.log("config : reset all data. for project "));
        return 1;
    }
    // low level 
    async checkAndUpdateActiveSprintData() {
        console.log(`config : checkAndUpdateActiveSprintData()...`);
        //todo dynamic board id / project id. make api call >filter project id (from payload.)
        const currentBoardId = await this.customApi.getCurrentBoardId();

        let response = await api.asApp().requestJira(route`/rest/agile/1.0/board/${currentBoardId}/sprint`, {
            headers: {
                'Accept': 'application/json'
            }
        });

        let allSprints = await response.json();
        
        if(allSprints?.errorMessages || allSprints.values.length == 0){
            if(allSprints?.errorMessages) return {error : allSprints.errorMessages}
            return {error : "Create Sprint in the current project to continue."};
        }

        let ApiActiveSprintId = null;
        try{

            ApiActiveSprintId = _.filter(allSprints.values, { state: 'active' })[0].id;
        }
        catch(err){
            return {error : "Create Sprint in the current project to continue."};
        }

        let storedActiveSprintId = await storage.get('activeSprintId'+`_${this.PROJECT_ID}`);

        if (storedActiveSprintId != ApiActiveSprintId) {
            storage.set('activeSprintId'+`_${this.PROJECT_ID}`, ApiActiveSprintId);

            let storedUserData = await storage.get('userData'+`_${this.PROJECT_ID}`);

            if(storedActiveSprintId != undefined){

                storedUserData.forEach(user => {
                    user.totalSprints++;
                });
                
                await storage.set('userData'+`_${this.PROJECT_ID}`, storedUserData);
            }
                
            console.log(`config : new sprint id ${ApiActiveSprintId} and storedUserData updated!`);
        }

        let defaultSP = await storage.get('defaultStorypoint'+`_${this.PROJECT_ID}`);
        if(!defaultSP){
            await this.updateDefaultStorypoint(12);
            console.log("config - sprint storypoint limit set to 20 (default).");
        }
        return 1;
    }

    async checkAndUpdateActiveSprintUsers() {
        console.log(`config : checkAndUpdateActiveSprintUsers()...`);

        let users = await this.customApi.getSprintUsers();
        let storageUser = await storage.get('userData'+`_${this.PROJECT_ID}`);

        
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

            await storage.set('userData'+`_${this.PROJECT_ID}`,newStorageUser);
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

            await storage.set('userData'+`_${this.PROJECT_ID}`,updatedStorageUser);
            console.log('config - storage userData updated.');
            return 1;
        }

        console.log("config - unchanged userData. (wrt to count!)");
        return 0;
    }
    
    async updateDefaultStorypoint(value){
        await storage.set('defaultStorypoint'+`_${this.PROJECT_ID}`,value);
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
        
        let fields = await this.customApi.getFields();
        
        let storypointField = fields.filter(field => field.name == "Story point estimate");
        if(!storypointField?.length){
            //if not story point estimation then take story point field
            storypointField = fields.filter(field => field.name == "Story Points");
            console.log("config - story point estimation not found story point field is stored.");
        }

        if(storypointField?.length){
            //check for label field
            let label = fields.filter(field => field.name == "Labels");
            if(label.length){
                await storage.set("STORYPOINT_FIELDNAME",storypointField[0].key);
                console.log("config : required fields are present and configured in the storage data.");
                return 1;
            }
            console.log("~ config : labels are not present in the field!");
            return {key:"",summary:"",error : "Make sure Lables are present in the issue fields! Go to Board > Configure Board > Issue Types > (drag and drop) Labels on desired issue type > Save."};
        }
        
        console.log("~ config : story point fields is not present in the field!");
        return {key:"", summary: "", error : "Make sure Story Point Estimation and Labels are present in the issue fields! Go to Board > Configure Board > Issue Types > (drag and drop) Story Point estimation and Labels on desired issue type > Save."};
        return 1;
    }
}

export default Config;