import {default as humansData} from "../model/humansData.mjs";
import {Human} from "../model/humansData.mjs";

export default {
    loadData: async function loadData(callback){
        let data = await humansData.getData();
        callback(data);
    },
    createHuman: async function createHuman([name, lastName, age, sex, adress, phoneNumber]){
        return new Human(name, lastName, age, sex, adress, phoneNumber);
    }
}