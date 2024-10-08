// Basic calculator functions
function add(a, b){
    return a + b;
}

function substract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

// Calculator Operation
function operate(operator, num1, num2){
    switch(operator){
        case "+":
            return add(num1, num2);

        case "-":
            return substract(num1, num2);

        case "*":
            return multiply(num1, num2);

        case "/":
            return divide(num1, num2);
    }
}

let firstOperand = 0;
let operator = "";
let secondOperand = 0;
let displayValue = 0

// display result
const buttons = document.querySelectorAll("button");

const resultContainer = document.querySelector(".results")

buttons.forEach((button) => {
    if(Number.isInteger(+button.textContent)){
        button.addEventListener("click", (e) => {
            resultContainer.textContent += e.target.textContent;
            displayValue = +resultContainer.textContent;
        }); 
    }
});

