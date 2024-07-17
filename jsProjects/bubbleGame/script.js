/* DOM */
let hitDisplay = document.querySelector(".hit");
let timerDisplay = document.querySelector(".timer");
let scoreDisplay = document.querySelector(".score");
let bubbleWrap = document.querySelector(".panel_bottom");

let hitRn = 0;
let score = 0;
let time = 60;

// Create New bubble
function createBubble() {
  let bubble = "";

  for (let i = 1; i < 290; i++) {
    let bubbleRn = Math.floor(Math.random() * 10);
    bubble += `<div class="bubble">${bubbleRn}</div>`;
  }
  bubbleWrap.innerHTML = bubble;
}

// Generate Hit Random Number
function generateHitRandomNumber() {
  for (let i = 0; i <= 10; i++) {
    hitRn = Math.floor(Math.random() * 10);
  }
  hitDisplay.textContent = hitRn;
}

// Increase Score
function increaseScore() {
  score += 10;
  scoreDisplay.textContent = score;
}

bubbleWrap.addEventListener("click", (details) => {
  let target = +details.target.textContent;

  if (hitRn === target) {
    console.log("o");
    increaseScore();
    createBubble();
    generateHitRandomNumber();
  }
});

// Set Bounding Time
function gameEndingTime() {
  let timeInterval = setInterval(() => {
    if (time > 0) {
      time--;
      timerDisplay.textContent = time;
    } else {
      clearInterval(timeInterval);
    }

    if (time === 0) {
      bubbleWrap.innerHTML = `<div>
        <p>Congratulation Your Score: ${score}</p>
        <br/>
        <br/>
        <p>Game Over!   <a href="#" onclick="window.location.reload()">Play Agin</a></p>
      </div>`;
    }
  }, 1000);
}

createBubble();
generateHitRandomNumber();
gameEndingTime();
