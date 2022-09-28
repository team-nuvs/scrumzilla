import Resolver from '@forge/resolver';
import {storage} from '@forge/api'

const resolver = new Resolver();

//custom modules.
import Config from './config';
import { test } from './storage';

//custom modules obj dec.
const config = new Config();

resolver.define('getText',  async (req) => {
    
    await config.checkAndUpdateActiveSprint();

    return "working bruh..."; 
});




export const handler = resolver.getDefinitions();

 