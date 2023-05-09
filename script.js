function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b
}
function divide(a,b){
    if(b==0){
        return "ERROR";
    }
    return a/b;
}
function modulo(a,b){
    return a%b
}

const displayResult=document.querySelector("#result");
const numberbuttons=document.querySelectorAll(".num");
const actionButtons=document.querySelectorAll(".op")
const sum=document.querySelector("#sum")
const clear=document.querySelector("#clear")
const del=document.querySelector("#del")
const dot=document.querySelector("#dot")

let firstnum=""
let secondnum=""
let operator=""
let storeValue=""
let result
let values=""
let counter=0

function operate(first,second,operator){
    switch (operator){
        case "+": return add(first,second); 
        case "-": return subtract(first,second);
        case '*': return multiply(first,second);
        case '/': return divide(first,second);
        case '%': return modulo(first,second);
    }
}

numberbuttons.forEach(numberbutton => {
    numberbutton.addEventListener('click',()=>{
        storeValue+=numberbutton.textContent;
        values+=numberbutton.textContent
        displayResult.textContent+=numberbutton.textContent;
    })
});

actionButtons.forEach(action=>{
    action.addEventListener('click',()=>{
        //calculate if operator already exists //done
        if(operator!=""){
            values=values.split(" ")
            firstnum=parseFloat(values[0]);
            secondnum=parseFloat(values[1]);
            if(firstnum!="" && secondnum!=""){
                result=Math.round(operate(firstnum,secondnum,operator)*1000)/1000;
                displayResult.textContent=result;
                storeValue=result;
                values=result  
            }
        }
        storeValue+=action.textContent;
        operator=action.textContent
        values+=" "
        displayResult.textContent=storeValue;
        counter=0;
    })
})
sum.addEventListener('click',()=>{
    console.log(storeValue)
    //values=storeValue.split(/\D/g) //shit doesnt work for negatives
    values=values.split(" ")
    firstnum=parseFloat(values[0]);
    secondnum=parseFloat(values[1]);
    result=Math.round(operate(firstnum,secondnum,operator)*1000)/1000;
    displayResult.textContent=result;
    storeValue=result;
    values=result
    operator=""
    // add error for no value //todo
})

clear.addEventListener('click',purge)

del.addEventListener('click',()=>{
    storeValue=storeValue.substring(0,storeValue.length-1)
    values=values.substring(0,values.length-1)
    displayResult.textContent=storeValue;
})
dot.addEventListener('click',()=>{
    if (counter<1){ //im too lazy for a better validator at this point
        storeValue+=dot.textContent;
        values+=dot.textContent
        displayResult.textContent+=dot.textContent; 
        counter=counter+1;
    }
})
function purge(){
    firstnum="";
    secondnum="";
    operator="";
    storeValue="";
    values=""
    counter=0
    displayResult.textContent="";
}
/*
//////////////////////spaghetti version without multiple operations
let firstnum=""
let secondnum=""
let operator
let storeValue=""
let result

function operate(first,second,operator){
    switch (operator){
        case "+": return add(parseInt(first),parseInt(second)); 
        case "-": return subtract(first,second);
        case '*': return multiply(first,second);
        case '/': return divide(first,second);
        case '%': return modulo(first,second);
    }
}

numberbuttons.forEach(numberbutton => {
    numberbutton.addEventListener('click',()=>{
        storeValue+=numberbutton.textContent;        
        displayResult.textContent+=numberbutton.textContent;
    })
});

actionButtons.forEach(action=>{
    action.addEventListener('click',()=>{
        firstnum=storeValue;
        storeValue="";
        operator=action.textContent;
        displayResult.textContent=firstnum+action.textContent;
        //if you sum after each action it will give you expected output
        // or maybe add another variable calculating it'
    })
})
sum.addEventListener('click',()=>{
    secondnum=storeValue;
    result=operate(firstnum,secondnum,operator);
    displayResult.textContent=result;
    storeValue=result;
})

clear.addEventListener('click',()=>{
    firstnum="";
    secondnum="";
    operator="";
    storeValue="";
    displayResult.textContent="";
})

del.addEventListener('click',()=>{
    console.log("hehye")
    storeValue=storeValue.substring(0,storeValue.length-1)
    displayResult.textContent=storeValue;
})*/