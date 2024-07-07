// add
// subtract
// multiply
// divide


function add(num1, num2){
    return num1+num2;
}

function subtract(num1, num2){
    return num1-num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    return num1/num2;
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

let number1 = 0;
let number2 = 0;
let operator = '';

console.log('Hello world')

console.log(operate('+', 2, 2));    // 4
console.log(operate('-', 2, 2));    // 0
console.log(operate('*', 2, 5));    // 10
console.log(operate('/', 10, 2));    // 5