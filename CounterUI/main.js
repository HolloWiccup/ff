const startPausa = document.getElementById("startPausa");
const stop = document.getElementById("stop");
let result = document.getElementById("result");
let timerStarted = false;
let intervalId;

function startCount() {
  let value = 0;
  function count() {
    value++;
    result.innerHTML = value;
  }
  if (!timerStarted) {
    timerStarted = true;
    intervalId = setInterval(count, 1000);
  }
}
function stopCount() {
  clearInterval(intervalId);
  timerStarted = false;
}
startPausa.addEventListener("click", startCount);
stop.addEventListener("click", stopCount);
