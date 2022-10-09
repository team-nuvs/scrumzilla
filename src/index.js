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
    console.log("GET - progress metrics");

    await config.checkAndUpdate();

    const data = await customApi.getMetrics();
    return data;
})

resolver.define("getIssueData" , async (req)=>{
    console.log("GET - issue & recommendation data ");
    const {issueId} = req.payload;
    const response = await customApi.getIssueAndRecommendatation(issueId);
    return response;
})

resolver.define("setAssignee" , async (req)=>{
    console.log("SET - assignee ");
    
    const {assigneeId} = req.payload;
    const {issueId} = req.payload;
    await customApi.setAssignee(issueId,assigneeId);

    const response = await customApi.getMetrics();
    return response;
})

resolver.define("getUserData" , async (req)=>{
    const userData = await storage.get('userData');
    console.log("GET - stored user's data ");
    return userData;
})

resolver.define("getStorypoint" , async (req)=>{
    console.log("GET - stored storypoint ");
    let sp = await storage.get('sprintStorypoint');
    let defaultSP = await storage.get('defaultStorypoint')
    let sprintID = await storage.get('activeSprintId')


    const result = {
        sp : sp,
        sprintSPLimit : defaultSP,
        sprintID : sprintID
    }
    return JSON.stringify(result); 
})

resolver.define('setDefaultStorypoint', async (req)=>{
    const {value} = req.payload;
    config.updateDefaultStorypoint(value);
    return {message : "default storypoint updated!"};
})
export const handler = resolver.getDefinitions();

 