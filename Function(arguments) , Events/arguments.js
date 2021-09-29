//arguments array like object
/*
function addnumbers(num1 , num2){
    console.log(arguments);
    return num1 + num2;
}
*/

function addnumbers(num1 , num2){
    for(var i=0 ;i<arguments.length ;i++){
        var element = arguments[i];
        console.log(element);
    }
    return num1 + num2;
}
var result=addnumbers(2,3,4,5);
console.log(result);