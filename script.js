/*
function clearAll() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined; 
}

clearAll.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})

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


const inputs = document.querySelectorAll('input[value].data-number');
const displayValue = inputs.forEach(function(input) {
    input.addEventListener("click", function() {
        document.getElementById('current-operand').textContent = input.value
    });
});


let b = document.querySelectorAll('button[data-number]');
let operation = document.querySelectorAll('button[data-operator]');

function operate(a, b, operation) {
    switch(operation) {
        case '+':  
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case "/":
            return divide(a, b);
    } 
}

// Write a function to clear the display 



// const calculator = new Calculator(a, b);


// write a function to delete a single number
/*
function del() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
}

deleteButton.addEventListener('click', button => {
    calculator.del();
    calculator.updateDisplay();
})

function appendNumber(number) {
    if (number === "." && this.currentOperand.includes('.')) {
        return;
    } 
    this.currentOperand = this.currentOperand.toString() + number.toString()
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
})

function chooseOperation(operation) {
    if (this.currentOperand === '') {
        return;
    } if (this.previousOperand !== '') {
        this.compute()
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
}
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation('button[data-number]'.innerText)
        calculator.updateDisplay();
    })
})

function updateDisplay() {
    this.b.innerText = this.currentOperand;
    this.a = this.previousOperand;
}
*/