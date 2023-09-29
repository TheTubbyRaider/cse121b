function add(number1, number2) {
    return number1 + number2;
  }
  
  function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').textContent = add(addNumber1, addNumber2);
  }
  
  document.querySelector('#addNumbers').addEventListener('click', addNumbers);
  
  // Subtraction Feature
  const subtract = function (number1, number2) {
    return number1 - number2;
  };
  
  const subtractNumbers = function () {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').textContent = subtract(subtractNumber1, subtractNumber2);
  };
  
  document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
  
  // Multiplication Feature
  const multiply = (number1, number2) => number1 * number2;
  
  const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').textContent = multiply(factor1, factor2);
  };
  
  document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
  
  // Division Feature
  function divide(number1, number2) {
    return number1 / number2;
  }
  
  function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').textContent = divide(dividend, divisor);
  }
  
  document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
  
  // Get Current Year
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  document.querySelector('#year').textContent = currentYear;
  
  // Array Methods - Functional Programming
  let numbersArray = Array.from({ length: 13 }, (_, index) => index + 1);
  
  document.querySelector('#array').textContent = numbersArray;
  
  let oddNumbers = numbersArray.filter(number => number % 2 === 1);
  document.querySelector('#odds').textContent = oddNumbers;
  
  let evenNumbers = numbersArray.filter(number => number % 2 === 0);
  document.querySelector('#evens').textContent = evenNumbers;
  
  let sumOfArray = numbersArray.reduce((sum, number) => sum + number);
  document.querySelector('#sumOfArray').textContent = sumOfArray;
  
  let multiplied = numbersArray.map(number => number * 2);
  document.querySelector('#multiplied').textContent = multiplied;
  
  let sumOfMultiplied = multiplied.reduce((sum, number) => sum + number);
  document.querySelector('#sumOfMultiplied').textContent = sumOfMultiplied;