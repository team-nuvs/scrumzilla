import Resolver from '@forge/resolver';
import storee from './storage';


const resolver = new Resolver();


resolver.define('getText', async (req) => {
    // console.log(req);
    // await storage.set('test','second test!!');
    // storage.set("hello", "world!!")
    storee.a();
    return "working";
});




export const handler = resolver.getDefinitions();

 