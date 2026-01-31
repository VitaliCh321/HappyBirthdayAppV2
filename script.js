"use strict";

const heading = document.querySelector(".heading");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let inputValue = event.target.querySelector("input").value;

  console.log(inputValue);
  console.log("event: ", event);
  console.log("input.value: ", typeof inputValue);
  console.log("bla bla: ", inputValue !== "");

  if (inputValue !== "" && isNaN(inputValue)) {
    heading.textContent = `Happy Birthday: ${inputValue.charAt(0).toUpperCase() + inputValue.slice(1)}!!!`;
    form.reset();
  } else {
    form.reset();
  }
});
