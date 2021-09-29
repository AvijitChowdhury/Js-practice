//Synchronous call back function

function callback(name, age , task){
    console.log(name);
    console.log(age);
    task();
}

function wash_your_hand(){
    console.log("wash your hand");
}


function take_shower(){
    console.log("take shower immediately");
}

function scroll_facebook(){
    console.log("scroll facebook");
};

callback('avijit',17 ,scroll_facebook);
callback('antik',17,wash_your_hand);
callback('durjoy',18,wash_your_hand);