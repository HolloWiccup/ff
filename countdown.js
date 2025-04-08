function countDown(seconds) {
  let number = seconds;

  function startCount() {
    if (number > 0) {
      number--;
      console.log(number);
    } else {
      clearInterval(interval);
      console.log("Отсчет закончен");
    }
  }
  const interval = setInterval(startCount, 500);
}
countDown(10);
