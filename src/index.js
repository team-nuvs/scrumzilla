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
 
    return "🔴 Live data"; 
});

//home
resolver.define("getProgressMetrics" , async (req)=>{
    await config.checkAndUpdateActiveSprintData();
    await config.checkAndUpdateActiveSprintUsers();

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
    return {issueId : "issueId"};
})

resolver.define("getUserData" , async (req)=>{
    const userData = await storage.get('userData');
    console.log("GET - stored user's data ");
    return userData;
})

resolver.define("getStorypoint" , async (req)=>{
    console.log("GET - stored storypoint ");
    let sp = await storage.get('sprintStorypoint');
    return sp ? sp : -1; 
})

resolver.define('setDefaultStorypoint', async (req)=>{
    const {value} = req.payload;
    config.updateDefaultStorypoint(value);
    return {message : "default storypoint updated!"};
})
export const handler = resolver.getDefinitions();

 