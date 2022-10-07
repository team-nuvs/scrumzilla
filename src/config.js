import { storage } from '@forge/api';
import api, { route } from "@forge/api";

import API from './api';

var _ = require('lodash');
var customApi = new API();

class Config {
    //todo add users data in storage.. && default sp per sprint > storage.
    PROJECT_ID = 1;

    USE_DEFAULT_STORYPOINT = false;
    DEFAULT_STORYPOINT_PER_SPRINT = 10;

    ACTIVE_SPRINT_ID = -1;

    //subject to change var.
    BOARD_ID = 1;
    STORYPOINT_FIELDNAME = 'customfield_10016';

    async checkAndUpdateActiveSprintData() {

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
            console.log("config : new sprint id updated!");
        }

        this.ACTIVE_SPRINT_ID = ApiActiveSprintId;

        let sprintStorypoint = await storage.get('sprintStorypoint');
        console.log(`config : storypoint val.: ${undefined}`);

    }

    async checkAndUpdateActiveSprintUsers() {
        let users = await customApi.getSprintUsers();
        let storageUser = await storage.get('userData');

        let mockUserData = {
            accountId: null,
            displayName:null,
            totalSprints: 1,
            totalIssuesAssigned: 0,
            total_storypoints: 0,
            labels: {}
        };

        if (storageUser == undefined) {
            let newStorageUser = [];

            users.forEach(user => {
                mockUserData.accountId = user.accountId;
                mockUserData.displayName = user.displayName;
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
                    mockUserData.accountId = user.accountId;
                    mockUserData.displayName = user.displayName;
                    updatedStorageUser.push(mockUserData);
                    console.log(`config - update : user ${mockUserData.displayName} added.`);
                }

            });

            await storage.set('userData',updatedStorageUser);
            console.log('config - storage userData updated.');
            return 1;
        }
        return 0;
    }

    async updateDefaultStorypoint(value){
        await storage.set('defaultStorypoint',value);
        return 1;
    }
}

export default Config;