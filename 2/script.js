
function getDivInner(){
    return document.getElementsByTagName('div')[0].innerText;
}

function getLiInner(i){
    return document.getElementsByTagName('li')[i].innerText;
}

alert(getDivInner());
alert(getLiInner(0));
alert(getLiInner(1));