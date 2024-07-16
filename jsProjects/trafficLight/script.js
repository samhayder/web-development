/* DOM */
let timer = document.querySelector(".timer");
let redLight = document.querySelector(".redLight");
let yellowLight = document.querySelector(".yellowLight");
let greenLight = document.querySelector(".greenLight");

let startTime = 20;
let runTime = 20;

function trafficSystem() {
  let timerIn = setInterval(() => {
    if (startTime > 0) {
      startTime--;
      timer.textContent = startTime;
      redLight.classList.add('red');
    } else {
      clearInterval(timerIn);
    }

    if (startTime === 5) {
      yellowLight.classList.add('yellow');
    }

    if (startTime === 0) {
      greenLight.classList.add("green");
      redLight.classList.remove("red");
      yellowLight.classList.remove("yellow");

      timer.textContent = runTime;

      let automatic = setInterval(() => {
        if (runTime > 0) {
          runTime--;
          timer.textContent = runTime;
        } else {
          clearInterval(automatic);
        }

        if (runTime === 5) {
          yellowLight.classList.add("yellow");
        }

        if (runTime === 0) {
          window.location.reload();
        }
      }, 1000);
    }
  }, 1000);
}

trafficSystem();

