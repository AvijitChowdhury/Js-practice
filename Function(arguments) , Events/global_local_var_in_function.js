function addUser(){
    //local variable
    var romanticname='av';
    console.log(romanticname);
}

addUser();

function addUser(){
    //global variable
    romanticname='av';
    console.log(romanticname);
}

console.log(romanticname);