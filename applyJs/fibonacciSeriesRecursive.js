var fibo=[0,1];


function fibonnaci(n){
    if(n==0){
        return [0];
    }
    else if(n==1)return [0,1];
    else{
        var fibo=fibonnaci(n-1);
    
        var nextEle=fibo[n-1]+fibo[n-2];
        fibo.push(nextEle);
        return fibo;
    }
}

var result=fibonnaci(20);
console.log(result);