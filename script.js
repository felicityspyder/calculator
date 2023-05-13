const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add("container");
body.appendChild(container);

const numericPad = function(rows, columns) {

container.innerHTML = '';
container.style.display = 'flex';
container.style.flexDirection = 'column';

    for (let i = 3; i > 0; i--) {
        const row = document.createElement('div');
        row.classList.add('numeral-rows'[i]);
        container.appendChild(row);

        let columns = 3;
        for (let j = 0; j < columns; j++) {
            const numeral = document.createElement('button');
            numeral.classList.add('num');
            numeral.textContent = numeral.id = (i * columns) + (j - 2);
            row.appendChild(numeral);
        }
    }


    for (let i = 1; i > 0; i--) {
        const row = document.createElement('div');
        row.classList.add('decimal-zero-equals');
        container.appendChild(row);
        
        const decimal = document.createElement('button');
        decimal.textContent = decimal.id = ".";
        row.appendChild(decimal);

        const zero = document.createElement('button');
        zero.textContent = zero.id = "0"
        row.appendChild(zero);

        const equals = document.createElement('button');
        equals.textContent = equals.id = "=";
        row.appendChild(equals);
    }


    const operatorColumn = document.createElement('div');
    operatorColumn.classList.add('operator-column');
    body.appendChild(operatorColumn);
    operatorColumn.innerHTML = '';
    operatorColumn.style.display = 'flex';
    operatorColumn.style.flexDirection = 'column';
    
    const divide = document.createElement('button');
    divide.textContent = divide.id = "/";
    operatorColumn.appendChild(divide);

    const multiply = document.createElement('button');
    multiply.textContent = multiply.id = "*";
    operatorColumn.appendChild(multiply);

    const subtract = document.createElement('button');
    subtract.textContent = subtract.id = "-";
    operatorColumn.appendChild(subtract);

    const plus = document.createElement('button');
    plus.textContent = plus.id = "+";
    operatorColumn.appendChild(plus);
  
    }


numericPad();

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

let a; 
let operator = ["=", "-", "*", "/",];
let b;


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

console.log(operate())
