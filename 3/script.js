
function getTable(){
    return document.getElementById('age-table');
}

function getLabels(){
    return getTable().getElementsByTagName('label');
}

function getFirstTd(){
    return getTable().getElementsByTagName('td')[0];
}

function getForm(){
    return document.getElementsByName('search')[0];
}

function getFirstInputInForm(){
    return getForm().getElementsByTagName('input')[0];
}

function getLastInputInForm(){
    
    let form = getForm();
    let input = form.lastElementChild;
    return input;
}

console.log(getTable());
console.log(getLabels());
console.log(getFirstTd());
console.log(getForm());
console.log(getFirstInputInForm());
console.log(getLastInputInForm());