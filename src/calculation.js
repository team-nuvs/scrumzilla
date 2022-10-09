
import {storage} from '@forge/api';

class Calculate {

    //todo async convert && storypoint store - issue assigned && storage call && update storypoint_total_current_sprint
    async progressTrackerMetrics(issues, trackUnassignedIssues = true, userInsightsMapOnly = false) {
        const totalIssues = issues.length;

        let unassignedIssues = [];

        let metrics = {
            total: totalIssues,
            unassigned: 0,
            todo: 0,
            progress: 0,
            done: 0,
            sprintStorypoint: 0
        };

        let insights = new Map();

        const STORYPOINT_FIELDNAME = await storage.get('STORYPOINT_FIELDNAME');
        issues.forEach(issue => {

            const statusName = issue.fields.status.name;
            metrics.sprintStorypoint += issue.fields[STORYPOINT_FIELDNAME];

            if (statusName == "To Do") metrics.todo++;
            if (statusName == "Done") metrics.done++;
            if (issue.fields.assignee == null) {
                metrics.unassigned++;
                unassignedIssues.push(this.convertIssueToLimitedData(issue,STORYPOINT_FIELDNAME));
            }
            else {
                //insights
                let assignee = issue.fields.assignee;

                if (insights.has(assignee.accountId)) {
                    let accountIdData = insights.get(assignee.accountId);

                    accountIdData.progress.total++;
                    if (statusName == "To Do") accountIdData.progress.todo++;
                    if (statusName == "Done") accountIdData.progress.done++;

                    accountIdData.storypoint.sprintTotal += issue.fields[STORYPOINT_FIELDNAME];

                    //update data
                    insights.set(assignee.accountId, accountIdData);
                }
                else {
                    //new hashmap

                    const defaultInsightsMetrics = {
                        accountId: assignee.accountId,
                        displayName: assignee.displayName,
                        avatarUrl: assignee.avatarUrls['48x48'],
                        storypoint: {
                            sprintTotal: issue.fields[STORYPOINT_FIELDNAME]
                        },
                        progress: {
                            total: 1,
                            todo: statusName == " To Do" ? 1 : 0,
                            done: statusName == "Done" ? 1 : 0
                        }
                    };

                    insights.set(assignee.accountId, defaultInsightsMetrics);

                }
            }

        });

        let storedCurrentStoryPoint = -1;
        if (!unassignedIssues && userInsightsMapOnly){
            storedCurrentStoryPoint = await storage.get("sprintStorypoint")
        }else{
            storedCurrentStoryPoint = await storage.set("sprintStorypoint",metrics.sprintStorypoint)
        }

        //todo : remark & storypoint progress & storage call
        for (let accountIdData of insights.values()) {
            let accountIdProgress = accountIdData.progress;
            accountIdProgress['progress'] = accountIdProgress.total - accountIdProgress.todo - accountIdProgress.done;

            const storedUserData = await storage.get('userData')
            //update
            accountIdData.storypoint = await this.generateStorypointRemark(
                storedUserData, accountIdData, 
                (!unassignedIssues && userInsightsMapOnly)
                    ? storedCurrentStoryPoint
                    : metrics.sprintStorypoint
            )
            accountIdData.progress = accountIdProgress;
            insights.set(accountIdData.accountId, accountIdData);
        }

        if(userInsightsMapOnly) return insights;

        metrics.progress = totalIssues - metrics.done - metrics.todo;
        metrics['assigned'] = totalIssues - metrics.unassigned;


        let result = {
            sprintProgress: metrics,
            usersInsights: Array.from(insights.values())
        };
        if (trackUnassignedIssues) {
            result['unAssignedIssues'] = unassignedIssues;
        }

        return result;
    }


    convertIssueToLimitedData(issue, STORYPOINT_FIELDNAME) {
      //with field required
        const newIssueData = {
            id: issue.id,
            key: issue.key,
            summary: issue.fields.summary,
            issuetype: issue.fields.issuetype,
            project: issue.fields.project,
            priority: issue.fields.priority,
            labels: issue.fields.labels,
            status: issue.fields.status,
            storypoint: issue.fields[STORYPOINT_FIELDNAME],
            reporter: issue.fields.reporter
        };

        return newIssueData;
    }

    generateRemarkMessage(displayName, spDiff, overAssigned = false){
        if(overAssigned)   
        return `${displayName} is over assigned by ${spDiff} points.`
        
        return `${displayName} is Under assigned by ${spDiff} points.`
    }

    async generateStorypointRemark(previousSPDataAllUsers, userInsights , sprintTotalSP){
        const currentSprintTotalSP = userInsights.storypoint.sprintTotal;

        const userPreviousData = previousSPDataAllUsers.filter(user=> user.accountId == userInsights.accountId)[0]


        //based on personalization > compare w/t current users avg.
        let spAvg = Math.round((userPreviousData.total_storypoints-userInsights.storypoint.sprintTotal)/userPreviousData.totalSprints);

        let personalized = {
            remark: null,
            message : null
        }; 

        if(userPreviousData.totalSprints>=2){
            if(currentSprintTotalSP > spAvg){
                personalized.remark = "Over Assigned";
                personalized.message = this.generateRemarkMessage(userInsights.displayName,
                    currentSprintTotalSP - spAvg
                    ,true)
                }
                else{
                    if(currentSprintTotalSP != spAvg ){
                        //under assign
                        personalized.remark = "Under Assigned";
                        personalized.message = this.generateRemarkMessage(userInsights.displayName,
                            spAvg - currentSprintTotalSP,
                            false)
                        }
                    }
                }
                
                //based on limit > compare w/t current users sprint total .
                let sprintLimit = {
                    remark: null,
                    message : null
                };
                
                const DEFAULT_STORYPOINT_PER_SPRINT = await storage.get('defaultStorypoint');

                if(currentSprintTotalSP > DEFAULT_STORYPOINT_PER_SPRINT){
                    sprintLimit.remark = "Over Assigned";
                    sprintLimit.message = this.generateRemarkMessage(userInsights.displayName,
                        currentSprintTotalSP - DEFAULT_STORYPOINT_PER_SPRINT
                        ,true)
                    }
                    else{
                        if(currentSprintTotalSP != DEFAULT_STORYPOINT_PER_SPRINT){
                            //under assign
                            sprintLimit.remark = "Under Assigned";
                            sprintLimit.message = this.generateRemarkMessage(userInsights.displayName,
                                DEFAULT_STORYPOINT_PER_SPRINT - currentSprintTotalSP,
                                false)
                            }
                        }
                        
        //based on allUsers > compare w/t all sprintTotalSP/no_of_user avg with sprint total . of user.

        let allUser = {
            remark: null,
            message : null
        };
        const sprintTotalAvg = Math.round(sprintTotalSP/previousSPDataAllUsers.length);
        
        if(currentSprintTotalSP > sprintTotalAvg){
                allUser.remark = "Over Assigned";
                allUser.message = this.generateRemarkMessage(userInsights.displayName,
                    currentSprintTotalSP - sprintTotalAvg
                    ,true)
            }
            else{
                if(currentSprintTotalSP != sprintTotalAvg){
                    //under assign
                    allUser.remark = "Under Assigned";
                    allUser.message = this.generateRemarkMessage(userInsights.displayName,
                        sprintTotalAvg - currentSprintTotalSP,
                        false)
            }



        }

        let storypointData = {
            sprintTotal : currentSprintTotalSP,
            remarkCompareWith:{
                userPreviousData : personalized,
                allUser : allUser,
                sprintLimit : sprintLimit
            }
        }
        return storypointData;
    }


    async generateUserIssueRecommendations(allAssignedIssues, requestedIssueData){
        let usersInsights = await this.progressTrackerMetrics(allAssignedIssues,false, true);
        //todo promise.all userInsights , storage, requestedIssue
        // const requestedIssue = //response
        const requestedIssue = requestedIssueData; //field!!
        const previousSPDataAllUsers = await storage.get('userData');

        const issueLabel = requestedIssue.fields.labels[0];
        // const issueLabel = "frontend";
        const userRank = this.generateUsersByLabelRank(issueLabel, previousSPDataAllUsers);

        let recommendedUsers = [];

        if(userRank!=0){
            userRank.forEach(user => {
                let userData = usersInsights.get(user.accountId);
                //todo labelscore percent 
                if(user.labels[issueLabel])
                    userData['labelScore'] = user.labels[issueLabel];
                else
                    userData['labelScore'] = 0;

                recommendedUsers.push(userData);
            });

            let STORYPOINT_FIELDNAME = await storage.get('STORYPOINT_FIELDNAME');
            const result ={
                issue: this.convertIssueToLimitedData(requestedIssue, STORYPOINT_FIELDNAME),
                recommendations : recommendedUsers
            }
            return result;
        }

        console.log("calc : userRank issue");
        return 0;
    }

    generateUsersByLabelRank(issueLabel,previousSPDataAllUsers){
        try{
             //assuming only 1 label will be assigned to every ticket...
            previousSPDataAllUsers.sort((a,b)=> {
                if(!a.labels[issueLabel])
                    return 1;
                
                if(!b.labels[issueLabel])
                    return -1;
                
                    
                if(b.labels[issueLabel] < a.labels[issueLabel])
                    return -1;
                return 1;
            });

            return previousSPDataAllUsers;
        }
        catch(e){
            console.log("calc : label error!");
            return 0;
        }
    }
}

export default Calculate;