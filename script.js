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
let operator;
let b

function operate() {
    switch(operator) {
        case '+':  
            add(a, b);
            break;
        case '-':
            subtract(a, b);
            break;
        case '*':
            multiply(a, b);
            break;
        case "/":
            divide(a, b);
            break;
    } 
}

