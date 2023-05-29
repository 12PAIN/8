import {default as humansData} from "../model/humansData.mjs";

export default {
    loadData: async function loadData(callback){
        let data = await humansData.getData();
        callback(data);
    }
}