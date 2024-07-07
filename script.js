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

function displayPopulate(digit){
    const display = document.querySelector(".display");
    display.textContent = digit.textContent;
    displayValue = Number(digit.textContent);

    console.log(displayValue);
}

let number1 = 0;
let number2 = 0;
let operator = '';
let displayValue = '';


const digitButton = document.querySelectorAll(".digitButton");

for (const digits of digitButton){
    digits.addEventListener("click", () => displayPopulate(digits));
}
// console.log(digitButton);
// display();


// console.log(operate('+', 2, 2));    // 4
// console.log(operate('-', 2, 2));    // 0
// console.log(operate('*', 2, 5));    // 10
// console.log(operate('/', 10, 2));    // 5