function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun("bathe my dog"));
function mondayWork(work = "go to the office"){
    return `This Monday, I will ${work}.`
}
console.log(mondayWork("work from home"));
function wrapAdjective(visual = "*"){
    return function(adjective = "special"){
        return `You are ${visual}${adjective}${visual}!`;
    };
}
console.log(wrapAdjective("||")("a dedicated programmer"));
