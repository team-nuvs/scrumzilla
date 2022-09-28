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
    await customApi.setAssignee('KB-19','70121:1848c046-b89f-4f8f-a22f-846875694d2a')
    return "working bruh..."; 
});



export const handler = resolver.getDefinitions();

 