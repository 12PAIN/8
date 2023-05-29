
export default {
    createButton: function([text="Загрузить", eventHandler]){

        let button = document.createElement('button');
        button.textContent = text;
    
        button.addEventListener('click', eventHandler);
    
        return button;
    },

    createHumanRow: async function(human, number){
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

        return new Promise((resolve)=>resolve(tr));
    },

    createTableHeader: async function(args){
        let th = document.createElement('tr');

        for(let arg of args){
            let td = document.createElement('th');
            td.innerText = arg;
            th.appendChild(td);
        }

        return new Promise((resolve)=>resolve(th));
    },

    createAdderForm: async function(adderCallback){

        let form = document.createElement('div');
        form.id = 'adderForm';
        form.className = 'adderForm';

        let name = document.createElement('input');
        let lastName = document.createElement('input');
        let age = document.createElement('input');
        let sex = document.createElement('input');
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

    }
}