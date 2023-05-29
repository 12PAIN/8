
import {default as frontendUtils} from "../utils/frontend-utils.mjs";
import {default as dataUtils} from "../utils/data-utils.mjs";

let body = document.getElementById('body');
let data;
let table;
let form;

//Создаём кнопку
body.appendChild( frontendUtils.createButton([,async ()=>{
    await dataUtils.loadData((newData)=>{
        data = newData;
    })

    //Вставляем форму на добавление
    await adderForm();

    //Добавляем таблицу
    await createTable();

    //Заполняем таблицу данными
    await fillTable();

    console.log(data);
}]));

//Создание таблицы
async function createTable(){
    
    if(table != undefined){
        body.removeChild(table);
        table = undefined;
    };

    table = document.createElement('table');

    //name, lastName, age, sex, adress, phoneNumber
    let th = await frontendUtils.createTableHeader(['Номер', 'Имя', 'Фамилия', 'Возраст', 'Пол', 'Адрес', 'Телефон']);

    table.appendChild(th);
    body.appendChild(table);
}

//Заполнить таблицу данными
async function fillTable(){

    let i = 0;
    for(let human of data){
        table.appendChild(await frontendUtils.createHumanRow(human, ++i));
    }
}

//Вставить форму добавления
async function adderForm(){
    if (form != undefined) return;
    
    form = await frontendUtils.createAdderForm(addCallback);
    body.appendChild(form);
}

async function addCallback(){
    console.log('add');
}