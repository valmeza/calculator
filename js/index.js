"use strict";

const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator-keys");
const display = document.querySelector(".calculator-display");

keys.addEventListener("click", (e) => {
  const key = e.target;
  const keyContent = key.textContent;
  const action = key.dataset.action;
  const displayNumber = display.textContent;

  if (!action) {
    if (displayNumber === "0") {
      display.textContent = keyContent;
    } else {
      display.textContent = displayNumber + keyContent;
    }
  }
});
