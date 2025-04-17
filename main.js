const resultButton = document.getElementById("resultButton");
const colorButton = document.getElementById("changeBackground");

function changeColor() {
  const value = colorButton.getAttribute("data-color");
  document.body.style.backgroundColor = value;
}

function calculate() {
  let result;
  const operator1 = Number(document.getElementById("operator1").value);
  const operator2 = Number(document.getElementById("operator2").value);
  let calculateResult = document.getElementById("calculateResult");
  let selector = document.getElementById("selector").value;
  const mainDiv = document.getElementById("resultHistory");
  let newResult = document.createElement("div");

  switch (selector) {
    case "+":
      result = operator1 + operator2;
      break;
    case "-":
      result = operator1 - operator2;
      break;
    case "*":
      result = operator1 * operator2;
      break;
    case "/":
      result = operator1 / operator2;
      break;
  }
  calculateResult.innerHTML = result;
  newResult.innerHTML = result;
  newResult.style.border = "1px solid red";
  mainDiv.appendChild(newResult);
  newResult.addEventListener("click", () => newResult.remove());
}
resultButton.addEventListener("click", calculate);
colorButton.addEventListener("click", changeColor);
