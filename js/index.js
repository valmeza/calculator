"use strict";

const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator-keys");
const display = document.querySelector(".calculator-display");

keys.addEventListener("click", (e) => {
  const key = e.target;
  const keyContent = key.textContent;
  const action = key.dataset.action;
  const displayNumber = display.textContent;
  const previousKeyType = calculator.dataset.previousKeyType;

  if (!action) {
    if (displayNumber === "0" || previousKeyType === "operator") {
      display.textContent = keyContent;
    } else {
      display.textContent = displayNumber + keyContent;
    }
  }

  if (!action) {
    calculator.dataset.previousKey = "number";
  }

  if (action === "decimal") {
    display.textContent = displayNumber + ".";
    calculator.dataset.previousKey = "decimal";

    if (!displayNumber.includes(".")) {
      display.textContent = displayNumber + ".";
    } else if (previousKeyType === "operator") {
      display.textContent = "0.";
    }
    calculator.dataset.previousKeyType = "decimal";
  }

  if (action === "clear") {
    calculator.dataset.previousKey = "clear";
  }

  if (action === "calculate") {
    calculator.dataset.previousKey = "calculate";
  }

  if (
    action === "add" ||
    action === "subtract" ||
    action === "multiply" ||
    action === "divide"
  ) {
    key.classList.add("is-depressed");
    calculator.dataset.previousKeyType = "operator";
    calculator.dataset.firstValue = displayNumber;
    calculator.dataset.operator = action;
  }

  Array.from(key.parentNode.children).forEach((key) =>
    key.classList.remove("is-depressed")
  );

  // use floats for a calculator
  const calculate = (x, operator, y) => {
    let result = "";
    if (operator === "add") {
      result = parseFloat(x) + parseFloat(y);
    } else if (operator === "subtract") {
      result = parseFloat(x) - parseFloat(y);
    } else if (operator === "multiply") {
      result = parseFloat(x) * parseFloat(y);
    } else if (operator === "divide") {
      result = parseFloat(x) / parseFloat(y);
    }
    return result;
  };

  if (action === "calculate") {
    const firstValue = calculator.dataset.firstValue;
    const operator = calculator.dataset.operator;
    const secondValue = displayNumber;

    display.textContent = calculate(firstValue, operator, secondValue);
  }
});
