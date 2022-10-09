import { storage } from '@forge/api';
import api, { route } from "@forge/api";

import API from './api';

var _ = require('lodash');
var customApi = new API();

class Config {

    //subject to change var.
    BOARD_ID = 1;

    //top level
    async checkAndUpdate(){
        //saved 5sec here...
        Promise.all(
            [
                this.checkAndUpdateFields(),
                this.checkAndUpdateActiveSprintData(),
                this.checkAndUpdateActiveSprintUsers()
            ]
        ).then(res=>console.log("config : checkAndUpdate completed."))

        return 1;
    }

    // low level 
    async checkAndUpdateActiveSprintData() {
        console.log(`config : checkAndUpdateActiveSprintData()...`);

        let response = await api.asApp().requestJira(route`/rest/agile/1.0/board/${this.BOARD_ID}/sprint`, {
            headers: {
                'Accept': 'application/json'
            }
        });

        let allSprints = await response.json();
        let ApiActiveSprintId = _.filter(allSprints.values, { state: 'active' })[0].id;

        let storedActiveSprintId = await storage.get('activeSprintId');

        if (storedActiveSprintId != ApiActiveSprintId) {
            storage.set('activeSprintId', ApiActiveSprintId);
            //todo update user storage sprint count...

            let storedUserData = await storage.get('userData');

            storedUserData.forEach(user => {
                user.totalSprints++;
            });

            await storage.set('userData', storedUserData);

            console.log(`config : new sprint id ${ApiActiveSprintId} and storedUserData updated!`);
        }
    }

    async checkAndUpdateActiveSprintUsers() {
        console.log(`config : checkAndUpdateActiveSprintUsers()...`);

        let users = await customApi.getSprintUsers();
        let storageUser = await storage.get('userData');

        
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

            await storage.set('userData',newStorageUser);
            console.log(newStorageUser);
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

            await storage.set('userData',updatedStorageUser);
            console.log('config - storage userData updated.');
            return 1;
        }

        console.log("config - unchanged userData. (wrt to count!)");
        return 0;
    }
    
    async updateDefaultStorypoint(value){
        await storage.set('defaultStorypoint',value);
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
            return 1;
        }
        
        console.log("~ config : story point fields is not present in the field!");
        return 1;
    }
}

export default Config;