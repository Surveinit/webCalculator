function add(num1, num2){
    return Math.round((num1+num2) * 100) / 100;
}

function subtract(num1, num2){
    return Math.round((num1-num2) * 100) / 100;
}

function multiply(num1, num2){
    return Math.round((num1*num2) * 100) / 100;
}

function divide(num1, num2){
    return Math.round((num1/num2) * 100) / 100;
}

function operate(operator, num1, num2){
    // console.log(typeof(operator), num1, num2);
    if(operator === '+'){
        return add(num1, num2);
    }
    if(operator === '-'){
        return subtract(num1, num2);
    }
    if(operator === '*'){
        return multiply(num1, num2);
    }
    if(operator === '/'){
        return divide(num1, num2);
    }
}

function splitting(){
    let operators = ['+','-','*','/']; 

    if(display.textContent.includes('+')){
        let plusArr = display.textContent.split('+');
        gNumber1 = Number(plusArr[0]);
        gNumber2 = Number(plusArr[1]);
        gOperator = '+';
        displayValue = operate(gOperator, gNumber1, gNumber2);

        // console.log(gNumber1, gOperator, gNumber2, displayValue);
        // console.log(displayValue, typeof(displayValue));
        displayPopulate(displayValue);  
    }

    if(display.textContent.includes('-')){
        let subArr = display.textContent.split('-');
        gNumber1 = Number(subArr[0]);
        gNumber2 = Number(subArr[1]);
        gOperator = '-';
        displayValue = operate(gOperator, gNumber1, gNumber2);

        // console.log(gNumber1, gOperator, gNumber2, displayValue);
        // console.log(displayValue, typeof(displayValue));
        displayPopulate(displayValue); 
    }

    if(display.textContent.includes('*')){
        let mulArr = display.textContent.split('*');
        gNumber1 = Number(mulArr[0]);
        gNumber2 = Number(mulArr[1]);
        gOperator = '*';
        displayValue = operate(gOperator, gNumber1, gNumber2);

        // console.log(gNumber1, gOperator, gNumber2, displayValue);
        // console.log(displayValue, typeof(displayValue));
        displayPopulate(displayValue); 
    }

    if(display.textContent.includes('/')){
        let divArr = display.textContent.split('/');
        gNumber1 = Number(divArr[0]);
        gNumber2 = Number(divArr[1]);
        gOperator = '/';
        displayValue = operate(gOperator, gNumber1, gNumber2);

        // console.log(gNumber1, gOperator, gNumber2, displayValue);
        // console.log(displayValue, typeof(displayValue));
        displayPopulate(displayValue); 
    }

    // console.log(display.textContent, gNumber1, gNumber2, gOperator);
}

function displayPopulate(digit){
    if (typeof(digit) === 'number'){
        display.textContent = digit;
    }
    else{
        display.textContent += digit.textContent;    
    }
    
    // displayValue = Number(digit.textContendisplay.textContent t);

}

function clearDisplay(){
    display.textContent = '';
}

function backSpace(){
    console.log(display.textContent);
    display.textContent = display.textContent.slice(0, -1);
}

let gNumber1 = 0;
let gNumber2 = 0;
let gOperator = '';
let displayValue = '';

const display = document.querySelector(".display");
const digitButton = document.querySelectorAll(".digitButton");
const operatorButton = document.querySelectorAll(".operatorButton");
const equalButton = document.querySelector(".equalButton");
const clearButton = document.querySelector(".clearButton");
const backspaceButton = document.querySelector(".backspaceButton");

for (const digits of digitButton){
    digits.addEventListener("click", () => displayPopulate(digits));
}

for (const operator of operatorButton){
    operator.addEventListener("click", (e) => displayPopulate(operator));
}

equalButton.addEventListener("click", () => splitting());
clearButton.addEventListener("click", () => clearDisplay());
backspaceButton.addEventListener("click", () => backSpace());

// console.log(digitButton);
// display();


// console.log(operate('+', 2, 2));    // 4
// console.log(operate('-', 2, 2));    // 0
// console.log(operate('*', 2, 5));    // 10
// console.log(operate('/', 10, 2));    // 5