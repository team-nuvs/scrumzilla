class Calculate{
 
    progressTrackerMetrics(issues){
        //user = false > progress tracker for all issues > it will calc. assigned & unassigned issues.
        const totalIssues = issues.length;
        
        let metrics = {
            total: totalIssues,
            unassigned : 0,
            todo : 0,
            progress : 0,
            done : 0
        }

        let insights = new Map();

        issues.forEach(issue => {
            
            const statusName = issue.fields.status.name;

            if(statusName == "To Do") metrics.todo++;
            if(statusName == "Done") metrics.done++;
            if(issue.fields.assignee == null){
                metrics.unassigned++;
            }
            else{
                //insights
                let assignee = issue.fields.assignee;

                if(insights.has(assignee.accountId)){
                    let accountIdData = insights.get(assignee.accountId);
                    
                    accountIdData.progress.total++;
                    if(statusName == "To Do") accountIdData.progress.todo++;
                    if(statusName == "Done") accountIdData.progress.done++;

                    //update data
                    insights.set(assignee.accountId , accountIdData );
                }
                else{
                    //new hashmap

                    const defaultInsightsMetrics = {
                        accountId : assignee.accountId,
                        displayName : assignee.displayName,
                        avatarUrl : assignee.avatarUrls['48x48'],
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
            
            //update
            accountIdData.progress = accountIdProgress;
            insights.set(accountIdData.accountId, accountIdData);
        }
        
        metrics.progress = totalIssues - metrics.done - metrics.todo;
        metrics['assigned'] = totalIssues - metrics.unassigned;

        console.log(insights);
        return metrics;
    }
}


 // Test>> 

// const obj = new Calculate();
// console.log(obj.progressTrackerMetrics(obj.test));


export default Calculate;