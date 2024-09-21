const modalElement = document.querySelector(".modal");
const backDropElement = document.querySelector('.backdrop');
const formElement = document.querySelector('form');
const playerInputElement = document.querySelector("#playerName");
const playerNameElement = document.querySelector('.player_name');
const errorMsg = document.querySelector('.error_msg')
const playingFieldElement = document.querySelector("#playing_field");
const activePlayerName = document.querySelector(".active_player_name");
const winningMsgElement = document.querySelector(".winning_msg");
const winnerNameElement = document.querySelector(".winner_name");

const editPlayerOneBtn = document.querySelector(".edit_player_1_btn");
const editPlayerTwoBtn = document.querySelector(".edit_player_2_btn");
const cancelBtn = document.querySelector(".cancel_btn");
const startBtn = document.querySelector(".start_btn");

let gameFieldElements = document.querySelectorAll(".game_board li");

let playerId = 0;
let activePlayer = 0;
let currentRound = 1;

let playerLists = [
  {
    name: "",
    symbol: "X"
  },
  {
    name: "",
    symbol: "O"
  }
]
const gameData = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
]

editPlayerOneBtn.addEventListener('click', openPlayerConfig);
editPlayerTwoBtn.addEventListener('click', openPlayerConfig);

backDropElement.addEventListener('click', closePlayerConfig);
cancelBtn.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);

startBtn.addEventListener('click', startNewGame);
startBtn.addEventListener('dblclick', () => {
  window.location.reload();
});

gameFieldElements.forEach((gameFiled) => {
  gameFiled.addEventListener('click', selectGameField)
})