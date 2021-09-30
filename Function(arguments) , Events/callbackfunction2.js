function welcomeGuest(name,greetHandler){
    greetHandler(name);
}

const actorName='Tom haks';

function greetMorning(name){
    console.log('GoodMorning ',name);
}

welcomeGuest(actorName,greetMorning);