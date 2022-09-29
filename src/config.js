import {storage} from '@forge/api'
import api, { route } from "@forge/api";
var _ = require('lodash');
class Config{
    //todo add users data in storage.. && default sp per sprint > storage.
    PROJECT_ID = 1;
    
    USE_DEFAULT_STORYPOINT = false;
    DEFAULT_STORYPOINT_PER_SPRINT = 20;
    
    ACTIVE_SPRINT_ID = -1;
    
    //subject to change var.
    BOARD_ID = 1;
    STORYPOINT_FIELDNAME = 'customfield_10016';

    async checkAndUpdateActiveSprint(){

       let response = await api.asApp().requestJira(route`/rest/agile/1.0/board/${this.BOARD_ID}/sprint`, {
            headers: {
                'Accept': 'application/json'
            }
            })
        
        let allSprints = await response.json();
        let ApiActiveSprintId = _.filter(allSprints.values,{state:'active'})[0].id;

        let storedActiveSprintId = await storage.get('activeSprintId');
        
        if(storedActiveSprintId!=ApiActiveSprintId){
            storage.set('activeSprintId',ApiActiveSprintId);
            //todo update user storage sprint count...
            console.log("config : new sprint id updated!");
        }
        
        this.ACTIVE_SPRINT_ID = ApiActiveSprintId;
    }

    //todo compare storage user to users and update. if undefined storage then create new.

}

export default Config;