"use strict";

const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator-keys");

keys.addEventListener("click", (e) => {
  const key = e.target;
  const action = key.dataset.action;

  if (!action) {
    console.log("number key!");
  } else {
    console.log("action key!");
  }
});
