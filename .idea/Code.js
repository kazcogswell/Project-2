"use strict"
const PROMPT = require('readline-sync')

let policyNum, custFirstName, custLastName
let bDay, dueDate, age, ageFee
let atFaultNum, accidentCost

const BASE_PRICE = 100 , RANGE1 = 15 , RANGE2 = 30 , RANGE3 = 45 , RANGE4 = 60;
const AGEFEE1 = 20, AGEFEE2 = 10, AGEFEE3 = 30


function main() {

setpolicyNum();
setcustFirstName();
setcustLastName();
setbDay();
setdueDate();
setage();
setageFee(age);
setatFaultNum();
printResults();

}

main();

function setpolicyNum(){
    policyNum = PROMPT.question('What is the policy number? ');
}

function setcustFirstName (){
    custFirstName = PROMPT.question('What is your first name? ')
}

function setcustLastName (){
    custLastName = PROMPT.question('What is your last name? ')
}

function setbDay(){
    bDay = PROMPT.question('What is your birthdate(MM/DD/YYYY)? ')
}
function setdueDate(){
    dueDate = PROMPT.question('What is the due date (MM/DD/YYYY)? ')
}
function setage() {
    age = PROMPT.question('What is your age? ')
    if (age < 15) {
        console.log("You are too young, please retry.");
        return setage();
    }
}

function setageFee(age) {
    if(age >= 15 && age < 30) {
        ageFee = 20
    }
        else {
        if (age >= 30 && age < 45) {
            ageFee = 10
        }
        else (age >= 60);{
            ageFee = 30
        }
    }


}
function setatFaultNum(){
    atFaultNum = PROMPT.question('How many accidents are at fault?')
if (atFaultNum > 0)
        accidentCost = atFaultNum * 50;
    else (accidentCost = 0)
}

function printResults(){
    process.stdout.write('\x1Bc')
    console.log(""+ custFirstName +" " + custLastName , " with the birthdate of ",bDay," and the due date of " , dueDate ,);
    console.log(" Your insurance cost of policy number " + policyNum + " is $", accidentCost + BASE_PRICE + ageFee , ".");
}


