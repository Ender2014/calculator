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

const buttons = document.querySelectorAll("button");

const resultContainer = document.querySelector(".results")

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        resultContainer.textContent += e.target.textContent;
    });
});
