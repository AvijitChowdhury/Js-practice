

function getfullname(firstName ,secondName){
    let fullname="";

    for(let i= 0 ;i< arguments.length ;i++){
        const namepart= arguments[i];
        fullname= fullname +" "+ namepart;

    }
    return fullname;

}

const name= getfullname('rahim','uddin','karim','saledh','islam');
console.log(name);