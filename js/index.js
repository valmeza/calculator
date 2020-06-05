"use strict";

const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator-keys");

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    console.log("Button was hit");
  }
});
