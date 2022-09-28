import {storage} from '@forge/api'
import api, { route } from "@forge/api";

class Config{

    BOARD_ID = 1;
    PROJECT_ID = 1;
    
    USE_DEFAULT_STORYPOINT = false;
    DEFAULT_STORYPOINT_PER_SPRINT = 5;

    // constructor(){
    //     console.log("constructor : config..");
    // }


    async checkAndUpdateActiveSprint(){
        let activeSprint = await storage.get("activeSprint");

        console.log(activeSprint);
        console.log(typeof activeSprint);



        const response = await api.asApp().requestJira(route`/rest/agile/1.0/board/1/sprint`, {
        headers: {
            'Accept': 'application/json'
        }
        });

        console.log(`Response: ${response.status} ${response.statusText}`);
        console.log(await response.json());
    }



}

export default Config;