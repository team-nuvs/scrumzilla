import { storage } from '@forge/api';
import api, { route } from "@forge/api";

import Calculate from './calculation';

class API {
    
    
    calculate;

    PROJECT_ID = null;
    ACTIVE_SPRINT_ID = -1;
    
    constructor(projectId){
        this.PROJECT_ID = projectId;
        this.calculate = new Calculate(projectId);
    }


    //low level api's
    async getActiveSprintId() {
        if (this.ACTIVE_SPRINT_ID == -1) {
            this.ACTIVE_SPRINT_ID = await storage.get('activeSprintId'+`_${this.PROJECT_ID}`);
        }
        return this.ACTIVE_SPRINT_ID;
    }


    async getAllIssues() {
        let sprintId = await this.getActiveSprintId();

        let jql = `Sprint = ${sprintId} order by created DESC`;

        let response = await api.asApp().requestJira(
            route`/rest/api/3/search?jql=${jql}`
        );
        // console.log("sprintId" , sprintId);
        if (response.statusText == 'OK') {
            let data = await response.json();
            let issues = data.issues;
            return issues;
        }

        console.log("~ api : failed - getAllIssues()!");
        return 0;
    }

    async getAllUnassignedOrAssignedIssues(unassigned = false) {
        let sprintId = await this.getActiveSprintId();

        let jql;
        if (unassigned)
            jql = `assignee = EMPTY AND Sprint = ${sprintId} order by created DESC`;
        else
            jql = `assignee != EMPTY AND Sprint = ${sprintId} order by created DESC`;

        let response = await api.asApp().requestJira(
            route`/rest/api/3/search?jql=${jql}`
        );


        if (response.statusText == 'OK') {
            let data = await response.json();
            let issues = data.issues;
            return issues;
        }

        console.log("~ api : failed - getAllUnassignedOrAssignedIssues()");
        return 0;
    }



    async setAssignee(issueIdOrKey, accountId) {

        const bodydata = {
            accountId: `${accountId}`
        };

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
        await this.updateUserData(accountId, label, storypoint);

        console.log(`api : userData label for user ${issueData.fields.assignee.displayName} updated.`);
        return {userAssigned : true};
    }

    async updateUserData(accountId, label, issueStorypoint) {
        let userData = await storage.get('userData'+`_${this.PROJECT_ID}`);

        let userIndex = userData.findIndex(user => user.accountId == accountId);

        if (userData[userIndex].labels[label] != undefined) {
            userData[userIndex].labels[label]++;
        }
        else
            userData[userIndex].labels[label] = 1;

        userData[userIndex].totalIssuesAssigned++;
        userData[userIndex].total_storypoints += issueStorypoint;
        await storage.set('userData'+`_${this.PROJECT_ID}`, userData);
        return 1;
    }

    async getIssue(issueIdOrKey) {
        const response = await api.asApp().requestJira(
            route`/rest/api/3/issue/${issueIdOrKey}`
        );

        if (response.statusText == 'OK') {
            let data = await response.json();
            let issue = data;
            return issue;
        }

        console.log("~ api : failed - getIssue()");
        return 0;
    }

    async getSprintUsers() {
        let response = await api.asApp().requestJira(
            route`/rest/api/3/users/search`
        );
        if (response.statusText = "OK") {
            response = await response.json();
            return response.filter(user => user["accountType"] == "atlassian");
        }
        console.log("~ api : failed - getSprintUser()");
        return 0;
    }

    async getFields() {
        let response = await api.asApp().requestJira(
            route`/rest/api/3/field`
        );

        if (response.statusText == "OK") {
            response = await response.json();
            return response;
        }

        console.log(`~ api : failed to fetch field`);
        return 0;
    }

    // top level api's
    async getMetrics() {
        const issues = await this.getAllIssues();
        const metrics = await this.calculate.progressTrackerMetrics(issues);
        // console.log(metrics);
        return metrics;
    }

    async getIssueAndRecommendatation(issueId) {
        const allAssignedIssues = await this.getAllUnassignedOrAssignedIssues(false);
        const requestedIssueData = await this.getIssue(issueId);
        const result = await this.calculate.generateUserIssueRecommendations(allAssignedIssues, requestedIssueData);
        return result;
    }

    async getStandupDetails() {
        const allIssues = await this.getAllIssues();

        let insights = await this.calculate.progressTrackerMetrics(allIssues, false, true);
        let standupDetails = await storage.get('standupDetails'+`_${this.PROJECT_ID}`);
        
        if(insights['error'] != undefined){
            return insights;
        }

        //sorting on the basis of blockers ONLY ON THE LATEST (TODAY) STANDUP!!!
        
        if(standupDetails != undefined){

            let currentStandup = standupDetails[0];
            let currentStandupUser = currentStandup['user'];

            currentStandupUser.sort((a,b) =>{
                    let alength = a.standupUpdate[2].length;
                    let blength = b.standupUpdate[2].length;

                    if(alength < blength)
                        return 1;
                    return -1;
            })

            currentStandup['user'] = currentStandupUser;

            standupDetails[0] = currentStandup;
        }

        const result = {
            timelimit : 12, //by default
            issues: allIssues,
            insights: Array.from(insights.values()),
            standupDetails: standupDetails ? standupDetails : null
        };

        return result;
    }

    async setStandupDetails(issueId, key, accountId, payload) {
        const {updateType, message} = payload;
        const result = await this.calculate.setStandupDetails(issueId, key,  accountId, updateType, message);

        return result;
    }

    async setStandupDetailsNotes(standupId, notes){
        let standupDetails = await storage.get("standupDetails"+`_${this.PROJECT_ID}`);

        let currentStandupDetailsIndex = standupDetails.findIndex(details => details.standupId == standupId);
        let currentStandupDetails = standupDetails[currentStandupDetailsIndex];

        currentStandupDetails.notes = notes;

        standupDetails[currentStandupDetailsIndex] = currentStandupDetails;

        await storage.set("standupDetails"+`_${this.PROJECT_ID}`,standupDetails);

        return {updated : true};

    }

    async deleteStorageData(key){
        await storage.delete(key+`_${this.PROJECT_ID}`);
        return {deleted : true, message : "hope you know what you are doing."};
    }

    async getAllBoards(){
        let response = await api.asApp().requestJira(
            route`/rest/agile/1.0/board`
        )

        if(response.statusText == "OK"){
            response = await response.json();
            return response.values;
        }

        return 0;
    }

    async getCurrentBoardId(){

        let allBoards = await this.getAllBoards();

        const currentBoards = allBoards.filter(board => board.location.projectId == this.PROJECT_ID);
        //taking board id of the 0 index project filter result...
        if(allBoards)
            return currentBoards[0].id;
        
        console.log("~ api - getCurrentBoardId");
        return -1;
    }


}

export default API;