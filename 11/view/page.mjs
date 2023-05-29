
import {default as frontendUtils} from "../utils/frontend-utils.mjs";
import {default as dataUtils} from "../utils/data-utils.mjs";


let body = document.getElementById('body');
let data;
let table;
let form;
let updateForm;
let filter = 'none';
let filterForm;

//Первоначально заполняем страницу
body.appendChild( frontendUtils.createButton([,async ()=>{
    await dataUtils.loadData((newData)=>{
        data = newData;
    })

    if(updateForm != undefined){
        body.removeChild(updateForm);
        updateForm = undefined;
    }

    await addFilterForm();
   
    //Вставляем форму на добавление
    await adderForm();

    //Добавляем таблицу
    await createTable();

    //Заполняем таблицу данными
    await fillTable();

}]));

//Создание таблицы
async function createTable(){
    
    if(table != undefined){
        body.removeChild(table);
        table = undefined;
    };

    table = document.createElement('table');

    //name, lastName, age, sex, adress, phoneNumber
    let th = await frontendUtils.createTableHeader(['Номер', 'Имя', 'Фамилия', 'Возраст', 'Пол', 'Адрес', 'Телефон'],deleteCallback);

    table.appendChild(th);
    body.appendChild(table);
}

//Заполнить таблицу данными
async function fillTable(){

    let i = 0;
    for(let human of data){
        if(filter == 'F' && human.sex == 'M') continue;
        if(filter == 'M' && human.sex == 'F') continue;
        table.appendChild(await frontendUtils.createHumanRow(human, ++i, updateCallback));
    }
}

//Вставить форму добавления
async function adderForm(){
    if (form != undefined) return;
    
    form = await frontendUtils.createAdderForm(addCallback);
    body.appendChild(form);
}

//Вставить форму фильтрации
async function addFilterForm(){
    if(filterForm != undefined) return;
    filterForm = await frontendUtils.createFilterElement(filterHandler);
    body.appendChild(filterForm); 

}

//Колбэк добавления эл-та
async function addCallback(){
    
    let name = document.getElementById('fname').value;
    let lastName = document.getElementById('flastname').value;
    let age = document.getElementById('fage').value;
    let sex = document.getElementById('fsex').value;
    let adress = document.getElementById('fadress').value;
    let phone = document.getElementById('fphone').value;

    if(name == '' || lastName == '' || age == '' || sex == '' || adress == '' || phone == ''){
        alert('Ошибка!');
        return;
    }

    age = Number.parseInt(age);

    data.push(await dataUtils.createHuman([name, lastName, age, sex, adress, phone]));

    await updateTable();
}

//Колбэк удаления эл-та
async function deleteCallback(){
    
    let checkboxes = table.getElementsByTagName('input');

    let checkboxesChecked = [];

    for(let checkbox of checkboxes){
        if(checkbox.type == 'checkbox' && checkbox.checked) checkboxesChecked.push(checkbox);
    }

    for(let checkbox of checkboxesChecked){
        data.splice(Number.parseInt(checkbox.value), 1);
    }

    await updateTable();
}

//Колбэк обновления эл-та
async function updateCallback(event){
    if(updateForm != undefined){
        body.removeChild(updateForm);
        updateForm = undefined;
    }
    updateForm = await frontendUtils.createUpdateForm(data[Number.parseInt(event.srcElement.value)],  async ()=>{

        let name = document.getElementById('uname').value;
        let lastName = document.getElementById('ulastname').value;
        let age = document.getElementById('uage').value;
        let sex = document.getElementById('usex').value;
        let adress = document.getElementById('uadress').value;
        let phone = document.getElementById('uphone').value;

        if(name == '' || lastName == '' || age == '' || sex == '' || adress == '' || phone == ''){
            alert('Ошибка!');
            return;
        }

        console.log(name, lastName);

        age = Number.parseInt(age);

        data[event.srcElement.value] = await dataUtils.createHuman([name, lastName, age, sex, adress, phone]);
        await updateTable();

        body.removeChild(updateForm);
        updateForm = undefined;
    });

    body.insertBefore(updateForm, table);

    
}

//Коллбэк для фильтра
async function filterHandler(event){

    filter = event.srcElement.value;

    await updateTable();
}

//Обновить табличку заново
async function updateTable(){

    body.removeChild(table);
    table = undefined;

    if(updateForm != undefined){
        body.removeChild(updateForm);
        updateForm = undefined;
    }

    await createTable();
    await fillTable();
}