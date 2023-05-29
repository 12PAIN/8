//name, lastName, age, sex, adress, phoneNumber
let humansData = [
    {
        name: 'Andrey',
        lastName: 'Lianov',
        age: 18,
        sex: 'M',
        adress: 'Russia, Moscow, st. Bolshaya Bronnaya 1, build 1, flat 18',
        phoneNumber: '+7-995-111-11-11'
    },
    {
        name: 'Alexander',
        lastName: 'Lianov',
        age: 23,
        sex: 'M',
        adress: 'Russia, Moscow, st. Bolshaya Bronnaya 1, build 1, flat 18',
        phoneNumber: '+7-995-178-12-13'
    },
    {
        name: 'Elena',
        lastName: 'Korsheneva',
        age: 31,
        sex: 'F',
        adress: 'Russia, Moscow, st. Malaya Bronnaya 15, build 3, flat 14',
        phoneNumber: '+7-995-111-11-11'
    },
    {
        name: 'Maxim',
        lastName: 'Fragin',
        age: 45,
        sex: 'M',
        adress: 'Russia, St-Petersburg, Nevsky Avenue, 137, build 5, flat 91',
        phoneNumber: '+7-995-111-11-11'
    },
    {
        name: 'Olesya',
        lastName: 'Shpagina',
        age: 12,
        sex: 'F',
        adress: 'Russia, Kazan, st. Bauman Academic, 12, flat 4',
        phoneNumber: '+7-945-132-22-10'
    },
    {
        name: 'Sergey',
        lastName: 'Shpagin',
        age: 71,
        sex: 'M',
        adress: 'Russia, Kazan, st. Bauman Academic, 12, flat 4',
        phoneNumber: '+7-945-100-20-11'
    }
];


class data{
    constructor(){
        this.humansData = humansData;
    }

    async getData(size){
        let humansData=this.humansData;
        return new Promise((resolve)=>{
            resolve(humansData.slice(0, size))
        });
    }

    async getDataSize(){
        let humansData=this.humansData;
        return new Promise((resolve)=>{
            resolve(humansData.length);
        });
    }
}

export default new data();