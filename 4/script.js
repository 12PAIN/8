
let table = document.getElementsByTagName('table')[0];
let tds = table.getElementsByTagName('td');

for(let td of tds){
    let [left, right] = [...td.innerText.split(':')];
    left = Number.parseInt(left);
    right = Number.parseInt(right);

    if((left + right) % 2 == 0) td.style = 'background-color: red;'
}