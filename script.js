const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add("container");
body.appendChild(container);

const add = function(a, b) {
    return a + b;	
  };
  
  const subtract = function(a, b) {
      return a - b;
  };
  
const sum = function(a) {
let total = 0;
for (let i = 0; i < a.length; i++) {
    total += a[i];
};
return total;
};
  
const multiply = function(a) {
let total = 1;
for (let i = 0; i < a.length; i++) {
    total = total * a[i];
}
return total;
};

const divide = function(a, b) {
return a / b;
}
  
const power = function(a, b) {
return a ** b;
};
  
const factorial = function(a) {
    let total = 1;
for (let i = 2; i <= a; i++) {
    total *= i;
}
return total;
};

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data=equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');


function operate(a, b, operator) {
    switch(operator) {
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
// populate display when clicking number buttons
function currentValue(e) {
const value = document.querySelector('button');
console.log(value);
}

currentValue();

// const previousValue = document.querySelector(`button[data-key=${e.keycode}]`);

function currentOperand () {

}

function previousOperand () {

}

console.log(operate())
