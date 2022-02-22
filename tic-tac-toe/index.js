const gameField = document.querySelector('.game-field');
const buttonContainer = document.querySelector('.button__container');
const resetButton = document.querySelector('.button__reset');
const historyButton = document.querySelector('.button__history');
const playButton = document.querySelector('.button__play');

let winner = false;

function hideElement(element) {
  if (!Array.isArray(element)) element = [element];

  element.forEach(el => el.classList.add('hide'));
} 

function shawElement(element) {
  if (!Array.isArray(element)) element = [element];

  element.forEach(el => el.classList.remove('hide'));
} 

function drawGameField() {
  hideElement(playButton);
  
  const shawElements = [gameField, buttonContainer];
  shawElement(shawElements);
}

playButton.addEventListener('click', drawGameField);


let gameSteps = 0;
let currentPlayer = 'X';
let playedCells = [];

let isPlay = true;

const audio = new Audio();
audio.src = `./assets/audio/click.mp3`;
audio.currentTime = 0;


function drawFigure(cellPlayed) {
  cellPlayed.textContent = currentPlayer == 'X' ? currentPlayer : 'O';
}

function changeGameStates(cellIndex) {
  playedCells[cellIndex] = currentPlayer;
  currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
  gameSteps++;
}

function removeInactiveClass(element, className) {
  element.classList.remove(`${className}--inactive`);
}

function handleCellClick(cellClick) {
  const {cellIndex} = cellClick.dataset;

  if (playedCells[cellIndex] !== undefined) return;
  
  audio.play();
  drawFigure(cellClick);
  changeGameStates(cellIndex);
  removeInactiveClass(resetButton, 'button__reset');
  addInactiveClass(cellClick, 'cell');

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

const blackout = document.querySelector('.blackout');
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

    const shawElements = [blackout, popUp];
    shawElement(shawElements);
    
    popUpMessage.textContent = message;

    messages.unshift(message);

    if (messages.length > 10) messages.pop();
  }
}

function resetGame() {
  const hideElements = [popUp, blackout];

  hideElement(hideElements);
  clearGameField();
}

popUpButton.addEventListener('click', resetGame);


const cells = document.querySelectorAll('.cell');

function addInactiveClass(element, className) {
  element.classList.add(`${className}--inactive`);
}

function clearGameField() {
  winner = false;
  gameSteps = 0;
  currentPlayer = 'X';
  addInactiveClass(resetButton, 'button__reset');
  cells.forEach(cell => {
    cell.textContent = '';
    removeInactiveClass(cell, 'cell');
  });

  playedCells = [];
}

resetButton.addEventListener('click', clearGameField);

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
const historyButtonClose = document.querySelector('.history__button-close');

function showHistory() {
  const shawElements = [blackout, history];
  shawElement(shawElements);
  
  messages.forEach((message, index) => {
    const div = document.createElement('div');
    div.classList.add('history__record');
    div.textContent = `${index + 1}. ${message}`;
    history.append(div);
  })
}

historyButton.addEventListener('click', showHistory);

function closeHistory() {
  const historyRecords = document.querySelectorAll('.history__record');
  
  historyRecords.forEach(record => record.remove());

  const hideElements = [blackout, history];
  hideElement(hideElements);
}

historyButtonClose.addEventListener('click', closeHistory);

 

/*function changeAudio() {
  changePlayButton();
  togglePlayAudio();
}

playButton.addEventListener('click', () => {
  isPlay = isPlay ? false : true;

  changeAudio();
})*/