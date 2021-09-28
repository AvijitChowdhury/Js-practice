// var a=3;
// console.log(typeof(a));

// var name=`Avijit Chowdhury is a very good program`
// console.log(name.toUpperCase());
// console.log(name.indexOf("Avijit"));
// console.log(name.split("is"));
// var a="23";
// var b="fdf";
// console.log(a+b);

// var a='df';
// var b='345';
// console.log(a+b);

// var a=34;
// var b='34.5';
// b=parseFloat(b);
//b=parseInt(b);
//b=+b;
// console.log(a+b);

// var num1=0.1;
// var num2=0.2;
// var total =num1 + num2;
// total=total.toPrecision(3);
// console.log(total);

// var  number=-45;
// var absoluteNumber=Math.abs(number);
// console.log(absoluteNumber);

// var number = 3.4555 ;
// var roundNum=Math.round(number);
// console.log(roundNum);


// var number = 3.4555 ;
//  var roundNum=Math.ceil(number);
//  console.log(roundNum);

// var number = 3.4555 ;
//  var roundNum=Math.floor(number);
//  console.log(roundNum);

//  var number = 3.78 ;
//  var roundNum=Math.ceil(number);
//  console.log(roundNum);


//  var roundNum=Math.random();
//  console.log(roundNum);



//  var roundNum=Math.random()*100;
//  console.log(roundNum);


//date:

// var date = new Date("2021-9-27");

// console.log(date);

/*Array*/
/*
var friendsAge=[12,13,14,15,16];
friendsAge.push(34);
console.log(friendsAge);
console.log("length: "+friendsAge.length);
friendsAge.pop();
console.log(friendsAge);
// friendsAge.splice(1,3);
// console.log(friendsAge);
friendsAge.shift();
console.log(friendsAge);
*/
/*
var names=['kalam', 'balam' ,'komol','nalam' , 'salam'];
names.shift();
console.log(names);
names.unshift('valam');
console.log(names);
var part=names.slice(3,4);
console.log(part);
*/

/*switch*/
/*
var num=100;
switch(num){
    case 100:
        console.log("i am 100 years old");
        break;
    case 1000:
        console.log("i am 1000 years old ghost ");
    default:
        console.log("i am nothing");       
}
*/

function sum(a,b){
    return a+b;
}

console.log(sum(1,2));

function doubleIt(num){
    var num= num*2;
    return num;
}
console.log(doubleIt(3));