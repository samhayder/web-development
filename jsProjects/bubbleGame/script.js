
let timer = 10;
function setTimer() {
  let timerIn = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector(".timer").textContent = timer;
    } else {
      clearInterval(timerIn);
    }
  }, 1000);

}

setTimer();