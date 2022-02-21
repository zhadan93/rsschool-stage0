const gameField = document.querySelector('.game-field');
const restartButton = document.querySelector('.button-restart');
const historyButton = document.querySelector('.button-history');
const playButton = document.querySelector('.button-play');

let winner = false;

function hideElement(element) {
  element.classList.add('hide');
} 

function drawGameField() {
  hideElement(playButton);
  gameField.classList.remove('hide');
  restartButton.classList.remove('hide');
  historyButton.classList.remove('hide');
}

playButton.addEventListener('click', drawGameField);


let gameSteps = 0;
let currentPlayer = 'X';
let playedCells = [];

function drawFigure(cellPlayed) {
  cellPlayed.textContent = currentPlayer == 'X' ? currentPlayer : 'O';
}

function changeGameStates(cellIndex) {
  playedCells[cellIndex] = currentPlayer;
  currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
  gameSteps++;
}

function handleCellClick(cellClick) {
  const {cellIndex} = cellClick.dataset;

  if (playedCells[cellIndex] !== undefined) return;
  
  drawFigure(cellClick);
  changeGameStates(cellIndex);

  if (gameSteps > 4) showResult();
}

gameField.addEventListener('click', event => {
  if (event.target.classList.contains('cell') && !winner) handleCellClick(event.target);
});

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const popUp = document.querySelector('.pop-up');
const popUpMessage = document.querySelector('.pop-up__message');
const popUpButton = document.querySelector('.pop-up__button');

const showDrawMessage = () => 'Game ended in a draw!';
const showResultMessage = (win) => `Player ${win} has won the game. Steps: ${gameSteps}`;

function getResult() {
  for (let i = 0; i < 8; i++) {
    const winCombination = winningCombinations[i];
    let a = playedCells[winCombination[0]];
    let b = playedCells[winCombination[1]];
    let c = playedCells[winCombination[2]];
    
    if (a === undefined || b === undefined || c === undefined) continue;

    if (a === b && b === c) return {
      winCombination,
      win: a,
    }
  }

  if (!playedCells.includes(undefined) && gameSteps == 9) return 'draw';
}

let messages = [];

function showResult() {
  const win = getResult();
  let message = '';

  if (win == 'draw') message = showDrawMessage(); 
  if (typeof(win) == 'object') message = showResultMessage(win.win);

  if (win !== undefined) {
    winner = true;
    popUp.classList.remove('hide');
    popUpMessage.textContent = message;

    messages.unshift(message);
    
    if (messages.length > 10) messages.pop();
  }
}

function resetGame() {
  hideElement(popUp);
  clearGameField();
}

popUpButton.addEventListener('click', resetGame);


const cells = document.querySelectorAll('.cell');

function clearGameField() {
  winner = false;
  gameSteps = 0;
  currentPlayer = 'X';

  cells.forEach(cell => cell.textContent = '');

  playedCells = [];
}

restartButton.addEventListener('click', clearGameField);

function setLocalStorage(entries) {
  entries.forEach(entry => localStorage.setItem(entry[0], entry[1]));
}

window.addEventListener('beforeunload', () => {
  const messagesForLocalStorage = [['messages', messages]];
  setLocalStorage(messagesForLocalStorage);
});

function getLocalStorage() {
  const localStorageMessages = localStorage.getItem('messages');

  if (localStorageMessages) {
    messages = localStorageMessages.split(',');
  }
}

window.addEventListener('load', getLocalStorage);

const history = document.querySelector('.history');

function showHistory() {
  history.classList.remove('hide');
  messages.forEach((message, index) => {
    const div = document.createElement('div');
    div.textContent = `${index + 1}. ${message}`;
    history.append(div);
  })
}

historyButton.addEventListener('click', showHistory);