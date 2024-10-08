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

        case "x":
            return multiply(num1, num2);

        case "%":
            return divide(num1, num2);
    }
}

function isNumber(value) {
    return typeof value === 'number';
  }

let firstOperand = 0; 
let operator = ""; 
let secondOperand = 0;
let displayValue = 0;
let isSecondOperand = false;

// Display result
const buttons = document.querySelectorAll("button");
const numbers = document.querySelectorAll(".number");
const resultContainer = document.querySelector(".results");

function reset(){
    firstOperand = 0;
    operator = ""; 
    secondOperand = 0;
    displayValue = 0;
    isSecondOperand = false;
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        displayValue = e.target.textContent;

        if (button.className === "number"){
            resultContainer.textContent += displayValue;
            !isSecondOperand ? firstOperand += displayValue : secondOperand += displayValue;
            console.log(secondOperand, firstOperand)
            
        } else if (button.className === "operator"){
            resultContainer.textContent += displayValue;
            operator = button.textContent;
            isSecondOperand = true;
        
        } else if (button.className === "delete"){
            resultContainer.textContent = "";
            firstOperand = 0;
            operator = ""; 
            secondOperand = 0;
            displayValue = 0;
            isSecondOperand = false;

        } else if (button.className === "equalButtonBtn"){  
            displayValue = operate(operator, +firstOperand, +secondOperand);
            resultContainer.textContent = displayValue;
            isSecondOperand = false;
            firstOperand = displayValue;
            secondOperand = 0;
            
        }  
    });     
});



