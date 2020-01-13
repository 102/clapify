const clapify = require(".");
const input = document.querySelector("textarea");
const output = document.querySelector("p");

output.innerText = clapify(input.value);

input.addEventListener("input", event => {
  output.innerText = clapify(event.currentTarget.value);
});
