
export default {
    createButton: function([text="Загрузить", eventHandler]){

        let button = document.createElement('button');
        button.textContent = text;
    
        button.addEventListener('click', eventHandler);
    
        return button;
    },

    createHumanRow: async function(human, number, updateEventHandler){
        let tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerText = number;
        tr.appendChild(td);

        let {name, lastName, age, sex, adress, phoneNumber} = {...human};
        let args = [name, lastName, age, sex, adress, phoneNumber];

        for(let arg of args){
            let td = document.createElement('td');
            td.innerText = arg;
            tr.appendChild(td);
        }

        if(age < 18) tr.style = 'background-color: lightgreen;';
        if(age >= 18 && age < 60) tr.style = 'background-color: yellow;';
        if(age >= 60) tr.style = 'background-color: #e07070;';


        ///Удаление и редактирование

        let td_delete_update = document.createElement('td');

        let checkboxDelete = document.createElement('input');
        let updateButton = document.createElement('button');

        checkboxDelete.type = 'checkbox';
        checkboxDelete.value = number-1;
        checkboxDelete.id = number-1 + '_toDelete';

        updateButton.addEventListener('click', updateEventHandler);
        updateButton.id = number-1 + '_toUpdate';
        updateButton.value = number-1;
        updateButton.innerText = 'Редактировать';

        td_delete_update.appendChild(checkboxDelete);
        td_delete_update.appendChild(updateButton);

        tr.appendChild(td_delete_update);
        return new Promise((resolve)=>resolve(tr));
    },

    createTableHeader: async function(args, deleteCallback){
        let th = document.createElement('tr');

        for(let arg of args){
            let td = document.createElement('th');
            td.innerText = arg;
            th.appendChild(td);
        }

        let td = document.createElement('th');

        let deleteButton = document.createElement('button');
        deleteButton.addEventListener('click', deleteCallback);
        deleteButton.innerText = 'Удалить';

        td.appendChild(deleteButton);
        th.appendChild(td);

        

        return new Promise((resolve)=>resolve(th));
    },

    createAdderForm: async function(adderCallback){

        let form = document.createElement('div');
        form.id = 'adderForm';
        form.className = 'adderForm';

        let name = document.createElement('input');
        let lastName = document.createElement('input');
        let age = document.createElement('input');
        let sex = document.createElement('select');
        let adress = document.createElement('input');
        let phoneNumber = document.createElement('input');
        
        let label = document.createElement('label');
        label.for = 'fname';
        label.innerText = 'Добавить нового человека:';
        
        name.placeholder = 'Имя';
        name.id = 'fname';
        name.name = 'fname';

        lastName.placeholder = 'Фамилия';
        lastName.id = 'flastname';
        lastName.name = 'flastname';

        age.placeholder = 'Возраст';
        age.id = 'fage';
        age.name = 'fage';

        sex.placeholder = 'Пол';
        sex.id = 'fsex';
        sex.name = 'fsex';

        let option_1 = document.createElement('option');
        let option_2 = document.createElement('option');

        option_1.value = 'M';
        option_1.innerText = 'Мужчина';

        option_2.value = 'F';
        option_2.innerText = 'Женщина';

        sex.appendChild(option_1);
        sex.appendChild(option_2);

        adress.placeholder = 'Адрес';
        adress.id = 'fadress';
        adress.name = 'fadress';

        phoneNumber.placeholder = 'Номер тлф.';
        phoneNumber.id = 'fphone';
        phoneNumber.name = 'fphone';

        let submit = document.createElement('button');
        submit.id = 'fbutton';
        submit.innerText = 'Добавить';
        submit.addEventListener('click', adderCallback);

        form.appendChild(label);
        form.appendChild(name);
        form.appendChild(lastName);
        form.appendChild(age);
        form.appendChild(sex);
        form.appendChild(adress);
        form.appendChild(phoneNumber);
        form.appendChild(submit);

        return form;

    },

    createUpdateForm: async function(human, updateCallback){
        let form = document.createElement('div');
        form.id = 'updateForm';
        form.className = 'updateForm';

        let name = document.createElement('input');
        let lastName = document.createElement('input');
        let age = document.createElement('input');
        let sex = document.createElement('select');
        let adress = document.createElement('input');
        let phoneNumber = document.createElement('input');
        
        let label = document.createElement('label');
        label.for = 'uname';
        label.innerText = 'Редактировать человека:';
        
        name.value = human.name;
        name.id = 'uname';
        name.name = 'uname';

        lastName.value = human.lastName;
        lastName.id = 'ulastname';
        lastName.name = 'ulastname';

        age.value = human.age;
        age.id = 'uage';
        age.name = 'uage';

        sex.placeholder = 'Пол';
        sex.id = 'usex';
        sex.name = 'usex';

        let option_1 = document.createElement('option');
        let option_2 = document.createElement('option');

        option_1.value = 'M';
        option_1.innerText = 'Мужчина';

        option_2.value = 'F';
        option_2.innerText = 'Женщина';

        sex.appendChild(option_1);
        sex.appendChild(option_2);

        sex.value = human.sex;

        adress.value = human.adress;
        adress.id = 'uadress';
        adress.name = 'uadress';

        phoneNumber.value = human.phoneNumber;
        phoneNumber.id = 'uphone';
        phoneNumber.name = 'uphone';

        let submit = document.createElement('button');
        submit.id = 'ubutton';
        submit.innerText = 'Редактировать';
        submit.addEventListener('click', updateCallback);

        form.appendChild(label);
        form.appendChild(name);
        form.appendChild(lastName);
        form.appendChild(age);
        form.appendChild(sex);
        form.appendChild(adress);
        form.appendChild(phoneNumber);
        form.appendChild(submit);

        return form;
    },

    createFilterElement: async function(callback){

        let div = document.createElement('form');
        div.id = 'filter';

        let label_1 = document.createElement('label');
        label_1.for = 'noneFilterInput';
        label_1.innerText = 'Без фильтрации:';

        let input_1 = document.createElement('input');
        input_1.type = 'radio';
        input_1.value = 'none';
        input_1.id = 'noneFilterInput';
        input_1.name = 'FilterInput';
        input_1.checked = true;

        let label_2 = document.createElement('label');
        label_2.for = 'MFilterInput';
        label_2.innerText = 'Только мужчины:';

        let input_2 = document.createElement('input');
        input_2.type = 'radio';
        input_2.value = 'M';
        input_2.id = 'MFilterInput';
        input_2.name = 'FilterInput';

        let label_3 = document.createElement('label');
        label_3.for = 'FFilterInput';
        label_3.innerText = 'Только женщины:';

        let input_3 = document.createElement('input');
        input_3.type = 'radio';
        input_3.value = 'F';
        input_3.id = 'FFilterInput';
        input_3.name = 'FilterInput';

        input_1.addEventListener('change', callback);
        input_2.addEventListener('change', callback);
        input_3.addEventListener('change', callback);

        div.appendChild(label_1);
        div.appendChild(input_1);

        div.appendChild(label_2);
        div.appendChild(input_2);

        div.appendChild(label_3);
        div.appendChild(input_3);

        return div;
    }
}