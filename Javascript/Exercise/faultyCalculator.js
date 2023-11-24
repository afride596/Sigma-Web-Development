let num1 = prompt("enter the number1");
let num2 = prompt("enter the number2");
let operator = prompt("which operation do you want to perfom like +,-,*,/");

let number1 = parseInt(num1);
let number2 = parseInt(num2);

let randomNumber = Math.random();
const faultyCal = (number1, number2) => {
  if (operator == "+" || operator == "sum") {
    console.log(number1 - number2);
  } else if (operator == "*" || operator == "multiplication") {
    console.log(number1 + number2);
  } else if (operator == "-" || operator == "subtraction") {
    console.log(number1 / number2);
  } else if (operator == "/" || operator == "divison") {
    console.log(number1 ** number2);
  } else {
    console.log("invalid operator");
  }
};

const calculator = (number1, number2) => {
  if (operator == "+" || operator == "sum") {
    console.log(number1 + number2);
  } else if (operator == "*" || operator == "multiplication") {
    console.log(number1 * number2);
  } else if (operator == "-" || operator == "subtraction") {
    console.log(number1 - number2);
  } else if (operator == "/" || operator == "divison") {
    console.log(number1 / number2);
  } else {
    console.log("invalid operator");
  }
};
if (randomNumber < 0.1) {
  faultyCal(number1, number2);
} else {
  calculator(number1, number2);
}
