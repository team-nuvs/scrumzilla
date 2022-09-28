import {storage} from '@forge/api';
import api, { route } from "@forge/api";
import Config from './config';

//
var _ = require('lodash')
var config = new Config();

class API{

    async getActiveSprintId(){
        return await storage.get('activeSprintId');
    }


    async getAllIssues(){
        let sprintId = await this.getActiveSprintId();

        let response = await api.asApp().requestJira(
            route`/rest/api/3/search?jql=status = "To Do" AND Sprint = 1 order by created DESC`
        )
        // console.log("sprintId" , sprintId);
        if(response.statusText == 'OK'){
            let data = await response.json();
                console.log(data);
            let issues = data.issues;
            return issues;
        }
        else{
            console.log("api : failed - getAllIssues()!");
        }

        return 0;
    }

}

export default API;