/*


class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        clearAll();
    }

}
*/

const add = function(a, b) {
    return a + b;
    
}
  
const subtract = function(a, b) {
      return a - b;
}
  

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}
  
const power = function(a, b) {
    let total = a ** b;
    return total;
}
  
const factorial = function(a) {
    let total = 1;
for (let i = 2; i <= a; i++) {
    total *= i;
}
return total;
};


const previousDisplay = document.getElementById('previous-operand');
const numericInputs = document.querySelectorAll('input[value].data-number');
const currentDisplay = document.getElementById('current-operand');
const operationInputs = document.querySelectorAll('input[value].data-operator');
const equalsButton = document.getElementById('=');
const clearButton = document.getElementById('AC');
const deleteButton = document.getElementById('DEL');


let previousOperand = '';
let operation = '';
let currentOperand = '';


numericInputs.forEach(function(input) {
    input.addEventListener("click", function() {
        currentOperand += input.value; 
        currentDisplay.textContent = currentOperand; 
    });   
});

operationInputs.forEach(function(input) {
    input.addEventListener('click', function() {
        if (operation.length !== '') {
            if (previousOperand !== '') {
            const result = operate(parseFloat(previousOperand), operation, parseFloat(currentOperand));
            previousOperand = result; 
            currentOperand = '';
            previousDisplay.textContent = previousOperand; 
            currentDisplay.textContent = ''; 
        } else {
            previousOperand = currentOperand;
            currentOperand = '';
        }
        }
        operation = input.value;
    });
});


equalsButton.addEventListener('click', function() {
    if (currentOperand !== '' && operation !== '') {
        const result = operate(parseFloat(previousOperand), operation, parseFloat(currentOperand));
        previousOperand = '';
        currentOperand = result;
        previousDisplay.textContent = '';
        currentDisplay.textContent = currentOperand;
    }   
});


function clearAll() {
    previousOperand = '';
    operation = '';
    currentOperand = '';
    previousDisplay.textContent = '';
    currentDisplay.textContent = '';
}

clearButton.addEventListener('click', clearAll);

function del() {
    currentOperand = currentOperand.slice(0, -1);
    currentDisplay.textContent = currentOperand;
}

deleteButton.addEventListener('click', del);


function operate(a, operation, b) {
    switch(operation) {
        case '+':  
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return '';
    } 
} 

// console.log(displayValue);

// const display = document.getElementById('current-operand');
// display.textContent = currentOperand;

// const calculator = new Calculator(a, b);


