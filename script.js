let displayElement = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operation = null;

function appendNumber(number) {
  currentOperand += number;
  updateDisplay();
}

function setOperation(op) {
  if (currentOperand === '') return;
  if (previousOperand !== '') {
    compute();
  }
  operation = op;
  previousOperand = currentOperand;
  currentOperand = '';
}

function compute() {
  let result;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    default:
      return;
  }
  currentOperand = result;
  operation = null;
  previousOperand = '';
  updateDisplay();
}

function clearDisplay() {
  currentOperand = '';
  previousOperand = '';
  operation = null;
  updateDisplay();
}

function updateDisplay() {
  displayElement.innerText = currentOperand;
}
