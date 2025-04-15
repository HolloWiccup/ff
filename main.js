const resultButton = document.getElementById("resultButton");

function calculate() {
  let result;
  const operator1 = Number(document.getElementById("operator1").value);
  const operator2 = Number(document.getElementById("operator2").value);
  let calculateResult = document.getElementById("calculateResult");
  let selector = document.getElementById("selector").value;
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
}
resultButton.addEventListener("click", calculate);
