import { storage } from '@forge/api';

// class store{

//     a(){
//         console.log("other function working...");
//     }
    
//     async test() {
//         let val = await storage.get('test') + await storage.get("hello");
//         console.log(val);
//     }
//     a(){
//         console.log("other function working...");
//     }
    
//     async test() {
//         let val = await storage.get('test') + await storage.get("hello");
//         console.log(val);
//     }
    
// }

export function a(){
    console.log("other function working...");
}

export async function test() {
    let val = await storage.get('test') + await storage.get("hello");
    console.log(val);
}

// let storee = new store();

// export default storee;