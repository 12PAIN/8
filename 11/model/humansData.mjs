
import {default as dataSource} from "./dataSource.mjs";

class humansDataUtils{

    constructor(source){
        this.source = source;
        this.humans = undefined;
    }

    async getData(){

        await this.__loadData(this.source);

        let data = this.humans;
        return new Promise((resolve)=>{
            resolve(data);
        });
    }

    async __loadData(source){
        this.humans = [];
        let dataSize = await source.getDataSize();
        
        let n = Math.floor(Math.random() * (dataSize+1));

        if(n == 0) n++;
        
        let rawData = await source.getData(n);
        
        for(let human of rawData){
            let {name, lastName, age, sex, adress, phoneNumber} = human;
            let newHuman = new Human(name, lastName, age, sex, adress, phoneNumber);
            this.humans.push(newHuman);
        }
    }
}

class Human{
    constructor(name, lastName, age, sex, adress, phoneNumber){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.sex = sex;
        this.adress = adress;
        this.phoneNumber = phoneNumber;
    }
}

export default new humansDataUtils(dataSource);