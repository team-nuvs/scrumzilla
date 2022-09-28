class Calculate{
    progressTrackerMetrics(issues, user = false){
        //user = false > progress tracker for all issues > it will calc. assigned & unassigned issues.
        const totalIssues = issues.length;
        
        let metrics = {
            total: totalIssues,
            unassigned : 0,
            todo : 0,
            progress : 0,
            done : 0
        }


        issues.forEach(issue => {
            if(!user && issue.fields.assignee == null){
                metrics.unassigned++;
            }

            if(issue.fields.status.name == "To Do") metrics.todo++;
            if(issue.fields.status.name == "Done") metrics.done++;
        });
        
        metrics.progress = totalIssues - metrics.done - metrics.todo;
        if(!user){
            metrics['assigned'] = totalIssues - metrics.unassigned;
        }

        return metrics;
    }
}


/* // Test>> 

const obj = new Calculate();
console.log(obj.progressTrackerMetrics(obj.test));
*/

export default Calculate;