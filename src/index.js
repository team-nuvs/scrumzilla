import Resolver from '@forge/resolver';
import {storage} from '@forge/api'

const resolver = new Resolver();

//custom modules.
import Config from './config';
import API from './api';

resolver.define('getText',  async (req) => {
 
    return "🔴 Live data"; 
});

//home
resolver.define("getProgressMetrics" , async (req)=>{
    // await config.resetAllStoredData();
    const projectId = req.context.extension.project.id;

    const config = new Config(projectId);
    
    
    console.log(`GET - progress metrics for ${projectId}`);
    const checkStatus = await config.checkAndUpdate();
    if(checkStatus==1){
        const customApi = new API(projectId);
        const data = await customApi.getMetrics();
        return data;   
    }
    return checkStatus;
})

resolver.define("getIssueData" , async (req)=>{
    console.log("GET - issue & recommendation data ");

    const projectId = req.context.extension.project.id;

    const customApi = new API(projectId)

    const {issueId} = req.payload;
    const response = await customApi.getIssueAndRecommendatation(issueId);
    return response;
})

resolver.define("setAssignee" , async (req)=>{
    console.log("SET - assignee ");

    const projectId = req.context.extension.project.id;
    const customApi = new API(projectId);

    const {assigneeId} = req.payload;
    const {issueId} = req.payload;
    const response = await customApi.setAssignee(issueId,assigneeId);
    // const response = await customApi.getMetrics();
    return response;
})

resolver.define("getUserData" , async (req)=>{
    console.log("GET - stored user's data ");

    const projectId = req.context.extension.project.id;

    const userData = await storage.get('userData'+`_${projectId}`);
    return userData;
})

resolver.define("getStorypoint" , async (req)=>{
    console.log("GET - stored storypoint");
    const projectId = req.context.extension.project.id;
    let sp = await storage.get('sprintStorypoint'+`_${projectId}`);
    let defaultSP = await storage.get('defaultStorypoint'+`_${projectId}`)
    let sprintID = await storage.get('activeSprintId'+`_${projectId}`)

    const customApi = new API(projectId);
    let boardId = await customApi.getCurrentBoardId();

    const result = {
        projectId : projectId,
        boardId : boardId,
        sp : sp,
        sprintSPLimit : defaultSP,
        sprintID : sprintID
    }
    return JSON.stringify(result); 
})

resolver.define('setDefaultStorypoint', async (req)=>{

    console.log("SET - default Story Point");

    const projectId = req.context.extension.project.id;

    const config = new Config(projectId);
    
    const {value} = req.payload;
    config.updateDefaultStorypoint(value);
    return {message : "default storypoint updated!"};
})

//standup
resolver.define('setStandupDetails', async (req)=>{

    console.log(`SET - standup Details` );

    const projectId = req.context.extension.project.id;

    try{
        
        const issueId = req.context.extension.issue.id;
        const key = req.context.extension.issue.key;
        const {accountId} = req.context;
        
        const customApi = new API(projectId);
        const result =await customApi.setStandupDetails(issueId, key, accountId, req.payload);
        return result;
    }
    catch(e){
        return {message : "submit this from issue activity"}
    }
})

resolver.define('getStandupDetails', async (req)=>{

    console.log("GET - Standup Details");

    const projectId = req.context.extension.project.id;

    const customApi = new API(projectId);

    const result = await customApi.getStandupDetails();
    return result;
})


resolver.define("setStandupDetailsNotes", async (req)=>{

    const {standupId} = req.payload;
    const {notes} = req.payload;

    console.log(`SET - standup Details Notes for ${standupId}`)

    const projectId = req.context.extension.project.id;
    
    const customApi = new API(projectId);

    const response = await customApi.setStandupDetailsNotes(standupId, notes);
    return response;
})

//dev api
resolver.define("deleteStorageData", async (req)=>{

    const projectId = req.context.extension.project.id;

    const customApi = new API(projectId);

    console.log(`! Delete - storageDate for ${req.payload.key}`)
    const response = await customApi.deleteStorageData(req.payload.key);
    return response;
})

resolver.define('setStandupDetailsTimelimit' , async (req)=>{
    const projectId = req.context.extension.project.id;

    console.log(`SET - Standup Time for ${projectId}`);
    const customApi = new API(projectId);
    await customApi.setStandupTimelimit(req.payload.timeInMinutes);
    return {message : "Standup Timelimit updated successfully"};
})

resolver.define("getAnnouncement", async(req)=>{
    const announcement = {
        visible : true,
        message : "Checkout out the scrumzilla's walk-through video!",
        buttonText : "Link",
        link : "https://youtube.com"
    }

    return announcement;
})

resolver.define("getProjectSettingData" , async (req)=>{
    console.log("GET - project setting data");
    
    const projectId = req.context.extension.project.id;

    const timelimit = await storage.get("standupTimelimit" + `_${projectId}`)
    const storyPoint = await storage.get("defaultStorypoint" + `_${projectId}`)

    const setting ={
        timelimit : timelimit? timelimit : 12,
        defaultStoryPoint : storyPoint
    }
    return setting;
})


export const handler = resolver.getDefinitions();

 