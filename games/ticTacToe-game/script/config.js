function openPlayerConfig(event) {
  modalElement.style.display = "block";
  backDropElement.style.display = "block";
  playerInputElement.value = "";

  playerId = +event.target.dataset.playerid;
}

function closePlayerConfig() {
  modalElement.style.display = "none";
  backDropElement.style.display = "none";
  formElement.classList.remove("error");
  errorMsg.textContent = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playerName").trim();

  //error message
  if (!enteredPlayerName) {
    formElement.classList.add("error");
    errorMsg.textContent = "Please enter valid player name.";

    return;
  } else {
    formElement.classList.remove("error");
    errorMsg.textContent = "";
  }

  // save data
  const updatePlayerName = document.querySelector(`#player-id-${playerId}`);
  updatePlayerName.textContent = enteredPlayerName;

  playerLists[playerId - 1].name = enteredPlayerName;

  closePlayerConfig();
}

// Start new game
function startNewGame() {
  if (!playerLists[0].name || !playerLists[1].name) {
    alert("Please provide both players name.");
    return;
  }

  playingFieldElement.style.display = "block";
  activePlayerName.textContent = playerLists[activePlayer].name;

  startBtn.textContent = "Double Click Re-start Game";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }

  activePlayerName.textContent = playerLists[activePlayer].name;
}

function selectGameField(event) {
  const selectedFiled = event.target;

  selectedFiled.classList.add("disable");
  selectedFiled.textContent = playerLists[activePlayer].symbol;

  const selectedFiledRow = selectedFiled.dataset.row - 1;
  const selectedFiledCol = selectedFiled.dataset.col - 1;

  if (gameData[selectedFiledRow][selectedFiledCol] > 0) {
    alert("Please select empty box");
    return;
  }

  gameData[selectedFiledRow][selectedFiledCol] = activePlayer + 1;

  const winnerId = checkForGameOver();

  if (winnerId !== 0) {
    endGame(winnerId);
  }
  
  currentRound++;

  switchPlayer();
}

function checkForGameOver() {
  //checking the rows for equality
  for (let i = 0; i <= 2; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  //checking the columns for equality
  for (let i = 0; i <= 2; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  //Diagonal: Top left to bottom right
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  //Diagonal: Bottom left to top right
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentRound === 9) {
    return -1;
  }

  return 0;
}

function endGame(winnerId) {
  winningMsgElement.style.display = "block";

  if (winnerId > 0) {
    winnerNameElement.textContent = playerLists[winnerId - 1].name;
  } else {
    winningMsgElement.firstElementChild.textContent = "It's a DRAW!"
  }
}
