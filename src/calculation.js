
// import {storage} from '@forge/api'
// import Config from './config';

// const config = new Config();

class Calculate{
    
    STORYPOINT_FIELD = 'customfield_10016';
    // STORYPOINT_FIELD = config.STORYPOINT_FIELD;

    //todo async convert && storypoint store - issue assigned && storage call &&  remark add  && final json {sprintProgress : metrics , user : insights}
    progressTrackerMetrics(issues , trackUnassignedIssues = true){
        const totalIssues = issues.length;
        
        let unassignedIssues = [];

        let metrics = {
            total: totalIssues,
            unassigned : 0,
            todo : 0,
            progress : 0,
            done : 0,
            sprintStorypoint: 0
        }
        
        let insights = new Map();

        issues.forEach(issue => {
            
            const statusName = issue.fields.status.name;
            metrics.sprintStorypoint += issue.fields[this.STORYPOINT_FIELD]

            if(statusName == "To Do") metrics.todo++;
            if(statusName == "Done") metrics.done++;
            if(issue.fields.assignee == null){
                metrics.unassigned++;
                unassignedIssues.push(this.convertIssueToLimitedData(issue))
            }
            else{
                //insights
                let assignee = issue.fields.assignee;

                if(insights.has(assignee.accountId)){
                    let accountIdData = insights.get(assignee.accountId);
                    
                    accountIdData.progress.total++;
                    if(statusName == "To Do") accountIdData.progress.todo++;
                    if(statusName == "Done") accountIdData.progress.done++;

                    accountIdData.storypoint.sprintTotal+=issue.fields[this.STORYPOINT_FIELD]

                    //update data
                    insights.set(assignee.accountId , accountIdData );
                }
                else{
                    //new hashmap

                    const defaultInsightsMetrics = {
                        accountId : assignee.accountId,
                        displayName : assignee.displayName,
                        avatarUrl : assignee.avatarUrls['48x48'],
                        storypoint:{
                            sprintTotal: issue.fields[this.STORYPOINT_FIELD]
                        },
                        progress : {
                            total : 1,
                            todo : statusName == "To Do" ? 1 : 0,
                            done : statusName == "Done" ? 1 : 0
                        }
                    }

                    insights.set(assignee.accountId , defaultInsightsMetrics);

                }
            }

        });

        //todo : remark & storypoint progress & storage call
        for(let accountIdData of insights.values()){
            let accountIdProgress = accountIdData.progress
            accountIdProgress['progress'] = accountIdProgress.total - accountIdProgress.todo - accountIdProgress.done;
            
            //check defaultstorypoint = true else call storage...
                /*
                    remark based on own cap.
                    remark based on default fix val per user
                    remakr based on all avg of user
                */
            //update
            accountIdData.progress = accountIdProgress;
            insights.set(accountIdData.accountId, accountIdData);
        }
        
        metrics.progress = totalIssues - metrics.done - metrics.todo;
        metrics['assigned'] = totalIssues - metrics.unassigned;

        

        let result = {
            sprintProgress: metrics,
            usersInsights : Object.fromEntries(insights)
        }
        if(trackUnassignedIssues){
            result['unAssignedIssues'] = unassignedIssues;
        }

        return result;
    }


    convertIssueToLimitedData(issue){

        const newIssueData = {
            id: issue.id,
            key : issue.key,
            summary : issue.fields.summary,
            issuetype : issue.fields.issuetype,
            project : issue.fields.project,
            priority : issue.fields.priority,
            labels : issue.fields.labels,
            status : issue.fields.status,
            storypoint : issue.fields[this.STORYPOINT_FIELD],
            reporter : issue.fields.reporter
        }

        return newIssueData;
    }
}


 // Test>> 

// const obj = new Calculate();
// console.log(obj.progressTrackerMetrics(obj.test));

// console.log(obj.convertIssueToLimitedData());
export default Calculate;