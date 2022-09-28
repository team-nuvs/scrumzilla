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
    
    await config.checkAndUpdateActiveSprint();
    console.log( await customApi.getAllIssues())

    return "working bruh..."; 
});



export const handler = resolver.getDefinitions();

 