var num=123;


function prime(n){
    for(var i=2 ;i<n ;i++){
        if(n%i==0)return 0;
        else return 1;
    }
}
console.log(prime(num));