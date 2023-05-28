
let list = document.getElementById('list');

let str = '';
do{
    str = prompt('Введите строку:');
    if(!(str && str !== '')) break;
    let li = document.createElement('li');
    li.innerText = str;
    list.appendChild(li);
}while(str && str !== '');