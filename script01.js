document.querySelector("button").addEventListener("click", () => {
  const result =
    parseInt(document.querySelector("#firstNum").value) +
    parseInt(document.querySelector("#secondNum").value);
  document.querySelector("#result").innerHTML = "result is " + result;
});
