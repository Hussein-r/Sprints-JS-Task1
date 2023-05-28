document.querySelector("button").addEventListener("click", () => {
  const result =
    parseFloat(document.querySelector("#firstNum").value) +
    parseFloat(document.querySelector("#secondNum").value);
  document.querySelector("#result").innerHTML = "result is " + result;
});
