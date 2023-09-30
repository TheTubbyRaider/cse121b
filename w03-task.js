function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  const add1Value = parseFloat(document.getElementById('add1').value);
  const add2Value = parseFloat(document.getElementById('add2').value);
  const sumValue = add(add1Value, add2Value);
  document.getElementById('sum').textContent = sumValue;
}

document.getElementById('addNumbers').addEventListener('click', addNumbers);

const subtract = function (number1, number2) {
  return number1 - number2;
};

const subtractNumbers = function () {
  const subtract1Value = parseFloat(document.getElementById('subtract1').value);
  const subtract2Value = parseFloat(document.getElementById('subtract2').value);
  const differenceValue = subtract(subtract1Value, subtract2Value);
  document.getElementById('difference').textContent = differenceValue;
};

document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
  const factor1Value = parseFloat(document.getElementById('factor1').value);
  const factor2Value = parseFloat(document.getElementById('factor2').value);
  const productValue = multiply(factor1Value, factor2Value);
  document.getElementById('product').textContent = productValue;
};

document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);

function divide(number1, number2) {
  return number1 / number2;
}

function divideNumbers() {
  const dividendValue = parseFloat(document.getElementById('dividend').value);
  const divisorValue = parseFloat(document.getElementById('divisor').value);
  const quotientValue = divide(dividendValue, divisorValue);
  document.getElementById('quotient').textContent = quotientValue;
}

document.getElementById('divideNumbers').addEventListener('click', divideNumbers);

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.getElementById('year').textContent = currentYear;

const numbersArray = [...Array(13).keys()].map((x) => x + 1);
document.getElementById('array').textContent = numbersArray.join(', ');

const oddNumbers = numbersArray.filter((number) => number % 2 === 1);
document.getElementById('odds').textContent = oddNumbers.join(', ');

const evenNumbers = numbersArray.filter((number) => number % 2 === 0);
document.getElementById('evens').textContent = evenNumbers.join(', ');

const sumOfArray = numbersArray.reduce((acc, number) => acc + number, 0);
document.getElementById('sumOfArray').textContent = sumOfArray;

const multipliedArray = numbersArray.map((number) => number * 2);
document.getElementById('multiplied').textContent = multipliedArray.join(', ');

const sumOfMultiplied = multipliedArray.reduce((acc, number) => acc + number, 0);
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;