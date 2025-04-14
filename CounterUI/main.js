const startPausa = document.getElementById("startPausa");
const stop = document.getElementById("stop");
let result = document.getElementById("result");
let timerStarted = false;
let intervalId;
let value = 0;

function tick() {
  value++;
  result.innerHTML = value;
}

function startCount() {
  if (!timerStarted) {
    timerStarted = true;
    intervalId = setInterval(tick, 1000);
  } else if (timerStarted) {
    clearInterval(intervalId);
    timerStarted = false;
  }
}
function stopCount() {
  clearInterval(intervalId);
  timerStarted = false;
}

startPausa.addEventListener("click", startCount);
stop.addEventListener("click", stopCount);
