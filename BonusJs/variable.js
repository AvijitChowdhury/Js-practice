// let a = 3;
// a=5;
// console.log(a);


//const a= 3 ;
//console.log(a);

function factorialRecursive(num){
    if(num==1){
        console.log(num);
        return 1;

    }
    else{
        console.log(num,num-1);
        return num*factorialRecursive(num-1);
    }
}