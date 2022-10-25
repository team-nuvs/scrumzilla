 get users 
```/rest/api/3/users/search```
filter : "accountType": "atlassian"




get issue detail by id/key
```/rest/api/3/issue/<KB-18>```


PUT set issue 
```/rest/api/3/issue/**KB-19**/assignee```
body : ```{"accountId": "6326e30c14c6b4b221099d1f"}```

/rest/api/3/project/{projectIdOrKey}

/rest/api/3/project/recent


/rest/agile/1.0/board/

active sprint > id
/board/1/sprint


all issues in active sprint
/rest/agile/1.0/board/1/sprint/1/issue
/rest/agile/1.0/sprint/1/issue


jql
/rest/api/3/search?jql=<query>

calc dash %
**req. all issues > loop > var. return calc. **

sprint progress tacker
get TODO
status = "To Do" AND Sprint = 1 order by created DESC
status = "Done" AND Sprint = 1 order by created DESC
all issues - todo + done


unassigned issues
assignee = EMPTY AND Sprint = 1 order by created DESC
assigned issues
assignee != EMPTY AND Sprint = 1 order by created DESC


issues components:
unassigned issues
```assignee = EMPTY AND Sprint = 1 order by created DESC```



insights components:
**req. all developers/people**
loop>map>metrics + profile details + remark(message,status)

**over assigned**
??

-----------
/rest/api/3/project/{projectIdOrKey}

/rest/api/3/project/recent


/rest/agile/1.0/board/

active sprint > id
/board/1/sprint


all issues in active sprint
/rest/agile/1.0/sprint/1/issue



storage
last_sprint : val

active sprint > check last sprint != > update last_sprint> update sprint count of users present.

users:{
    id:{
        no. of sprint:
        total_issues_assigned:
        total_story_point:
        label:{
            label1 : no_of_issues
        }
    }
}
/**
 * test case to check & fix
 * Go to Backlog > click on Create sprint > add or create issues > click on Start sprint.
 * Go to Board > Configure Board > Issue Types > (drag and drop) story Point estimation and Labels on desired issue type.
 * 
 * ui change font, margin, with values
 *  
 * check customfield name>
 *  create label first and then sp
 *  create sp first and then lable
 * 
 * frontend - 
 * 1 min warning - on complete - complete card show. purple
 * no unassigned issues  - home
 * sprintLimit 
 * issue sp & label missing - modal - with enable instructions...
 * enable sprint - home
 * settings - standup timer > notes 
 * notes add placeholder, remove heading tools, 
 * hover and mouse pointer on people card - daily standup 
 * label percentage change
 * previous data change to SELF > null check first sprint
 */