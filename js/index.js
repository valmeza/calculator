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

  if (action === "decimal") {
    display.textContent = displayNumber + ".";
  }

  if (
    action === "add" ||
    action === "subtract" ||
    action === "multiply" ||
    action === "divide"
  ) {
    key.classList.add("is-depressed");
    calculator.dataset.previousKeyType = "operator";
  }

  Array.from(key.parentNode.children).forEach((key) =>
    key.classList.remove("is-depressed")
  );
});
