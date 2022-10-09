import {storage} from '@forge/api';
import api, { route } from "@forge/api";

import Calculate from './calculation';


//
const calculate = new Calculate();

class API{
    ACTIVE_SPRINT_ID = -1;

    //low level api's
    async getActiveSprintId(){
        if(this.ACTIVE_SPRINT_ID == -1){
            this.ACTIVE_SPRINT_ID = await storage.get('activeSprintId');
        }
        return this.ACTIVE_SPRINT_ID;
    }


    async getAllIssues(){
        let sprintId = await this.getActiveSprintId();
        
        let jql = `Sprint = ${sprintId} order by created DESC`
        
        let response = await api.asApp().requestJira(
            route`/rest/api/3/search?jql=${jql}`
        )
        // console.log("sprintId" , sprintId);
        if(response.statusText == 'OK'){
            let data = await response.json();
            let issues = data.issues;
            return issues;
        }
        
        console.log("~ api : failed - getAllIssues()!");
        return 0;
    }

    //todo : merge unassigned and assigned issue func.
    async getAllUnassignedIssues(){
        let sprintId = await this.getActiveSprintId();
        console.log(sprintId);
        let jql = `assignee = EMPTY AND Sprint = ${sprintId} order by created DESC`;

        let response = await api.asApp().requestJira(
            route`/rest/api/3/search?jql=${jql}`
        )

        
        if(response.statusText == 'OK'){
            let data = await response.json();
            let issues = data.issues;
            return issues;
        }

        console.log("~ api : failed - getAllUnassignedIssues()");
        return 0;
    }
    
    async getAllAssignedIssues(){
        let sprintId = await this.getActiveSprintId();
        let jql = `assignee != EMPTY AND Sprint = ${sprintId} order by created DESC`;

        let response = await api.asApp().requestJira(
            route`/rest/api/3/search?jql=${jql}`
        )

        
        if(response.statusText == 'OK'){
            let data = await response.json();
            let issues = data.issues;
            return issues;
        }

        console.log("~ api : failed - getAllUnassignedIssues()");
        return 0;
    }


    async setAssignee(issueIdOrKey, accountId){
     
          const bodydata = {
            accountId : `${accountId}`
          }

          const response = await api.asApp().requestJira(
            route`/rest/api/3/issue/${issueIdOrKey}/assignee`, {
            method: 'PUT', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(bodydata)
          });
         
        console.log("~ api : issue assigned triggered! could be failed or successful");
        
        const issueData = await this.getIssue(issueIdOrKey);
        const label = issueData.fields.labels[0];
        const STORYPOINT_FIELDNAME = await storage.get('STORYPOINT_FIELDNAME');
        const storypoint = parseInt(issueData.fields[STORYPOINT_FIELDNAME]);
        await this.updateUserData(accountId, label, storypoint)
        
        console.log(`api : userData label for user ${issueData.fields.assignee.displayName} updated.`);
        return 0;
    }

    async updateUserData(accountId, label, issueStorypoint){
        let userData = await storage.get('userData');
        
        let userIndex = userData.findIndex(user => user.accountId == accountId);

        if(userData[userIndex].labels[label] != undefined){
            userData[userIndex].labels[label]++;
        }
        else
            userData[userIndex].labels[label] = 1;
        
        userData[userIndex].totalIssuesAssigned++;
        userData[userIndex].total_storypoints+=issueStorypoint;
        await storage.set('userData',userData);
        return 1;
    }

    async getIssue(issueIdOrKey){
        const response = await api.asApp().requestJira(
            route`/rest/api/3/issue/${issueIdOrKey}`
        )
        
        if(response.statusText == 'OK'){
            let data = await response.json();
            let issue = data;
            return issue;
        }

        console.log("~ api : failed - getIssue()");
        return 0;
    }

    async getSprintUsers(){
        let response = await api.asApp().requestJira(
            route`/rest/api/3/users/search`
        )
        if(response.statusText="OK"){
            response = await response.json();
            return response.filter(user=>user["accountType"] == "atlassian")
        }
        console.log("~ api : failed - getSprintUser()");
        return 0;
    }

    async getFields(){
        let response = await api.asApp().requestJira(
            route`/rest/api/3/field`
        )

        if(response.statusText=="OK"){
            response = await response.json();
            return response;
        }

        console.log(`~ api : failed to fetch field`);
        return 0;
    }

    // top level api's
    async getMetrics(){
        const issues = await this.getAllIssues();
        const metrics = calculate.progressTrackerMetrics(issues);
        // console.log(metrics);
        return metrics;
    }

    async getIssueAndRecommendatation(issueId){
        const allAssignedIssues = await this.getAllAssignedIssues();
        const requestedIssueData = await this.getIssue(issueId);
        const result = await calculate.generateUserIssueRecommendations(allAssignedIssues, requestedIssueData);
        return result;
    }
}

export default API;