function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function calculator(a, b, operation) {
  if (operation === "add") {
    const result = add(a, b);
    return result;
  } else if (operation === "subtract") {
    const result = subtract(a, b);
    return result;
  } else if (operation === "multiply") {
    const result = multiply(a, b);
    return result;
  } else if (operation === "divide") {
    const result = divide(a, b);
    return result;
  } else {
    return "pls put the correct operations.";
  }
}

const a = 35;
const b = 5;
const operation1 = "add"


console.log(calculator(a, b, operation1));

const c = 35;
const d = 5;
const operation2 = "subtract"


console.log(calculator(c, d, operation2));

const e = 35;
const f = 5;
const operation3 = "multiply"


console.log(calculator(e, f, operation3));

const g = 35;
const h = 5;
const operation4 = "divide"


console.log(calculator(g, h, operation4));
