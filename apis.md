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