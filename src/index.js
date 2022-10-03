import Resolver from '@forge/resolver';
import {storage} from '@forge/api'

const resolver = new Resolver();

//custom modules.
import Config from './config';
import API from './api';


//custom modules obj dec.
const config = new Config();

const customApi = new API();

resolver.define('getText',  async (req) => {
    
    // await config.checkAndUpdateActiveSprint();
    // console.log( await customApi.getAllIssues())
    // console.log( await customApi.getAllUnassignedIssues())
    // await customApi.setAssignee('KB-19','70121:1848c046-b89f-4f8f-a22f-846875694d2a')
    // await customApi.getMetrics();
    return "🔴 Live data"; 
});


resolver.define("getProgressMetrics" , async (req)=>{
    console.log("GET - progress metrics");
    const data = await customApi.getMetrics();
    return data;
})

resolver.define("getIssueData" , async (req)=>{
    console.log("GET - issue & recommendation data ");
    const {issueId} = req.payload;
    //todo fix test issueid..
    const response = await customApi.getIssueAndRecommendatation(issueId);
    return response;
})

resolver.define("setAssignee" , async (req)=>{
    console.log("SET - assignee ");
    console.log(req.payload);
    return {issueId : "issueId"};
})

resolver.define("getUserData" , async (req)=>{
    console.log("GET - stored user's data ");
    return {"userData" : "this is user"};
})

resolver.define("getStorypoint" , async (req)=>{
    console.log("GET - stored storypoint ");
    return 3;
})

export const handler = resolver.getDefinitions();

 