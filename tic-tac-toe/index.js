const startGameButton = document.querySelector('.button__start-game');

const gameInterface = document.querySelector('.game__container');
const gameField = document.querySelector('.game-field');
const buttonContainer = document.querySelector('.button__container');
const resetButton = document.querySelector('.button__reset');
const historyButton = document.querySelector('.button__history');

let gameOver = false;
let playSound = true;

// Draw game interface
function hideElement(element) {
  if (!Array.isArray(element)) element = [element];

  element.forEach(el => el.classList.add('hide-animation'));
} 

function shawElement(element) {
  if (!Array.isArray(element)) element = [element];

  element.forEach(el => {
    const className = el.classList.contains('hide') ? 'hide' : 'hide-animation';
    el.classList.remove(className);
  });
} 

function drawGameInterface() {
  hideElement(startGameButton);
  shawElement(gameInterface);
}

startGameButton.addEventListener('click', drawGameInterface);


// Work with game field
const cells = document.querySelectorAll('.cell');

const audio = new Audio();

let gameSteps = 0;
let currentPlayer = 'X';
let filledCells = [];

function addInactiveClass(element, className) {
  element.classList.add(`${className}--inactive`);
}

function removeInactiveClass(element, className) {
  element.classList.remove(`${className}--inactive`);
}

function clearGameField() {
  cells.forEach(cell => {
    cell.textContent = '';
    removeInactiveClass(cell, 'cell');
    cell.classList.remove('winner');
  });
}

function resetGame() {
  gameOver = false;
  gameSteps = 0;
  currentPlayer = 'X';
  filledCells = [];
  addInactiveClass(resetButton, 'button__reset');
  clearGameField();
}

// Work with sound effects during the player's move
function togglePlayerSound() {
  audio.src = `./assets/audio/click${currentPlayer}.mp3`;
  audio.currentTime = 0;
}

function togglePlayingSound() {
  playSound ? audio.play() : audio.pause();
}

function handleSound() {
  togglePlayerSound();
  togglePlayingSound();
}

function changeGameStates(cellIndex) {
  filledCells[cellIndex] = currentPlayer;
  currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
  gameSteps++;
}

function drawFigure(cellPlayed) {
  cellPlayed.textContent = currentPlayer == 'X' ? 'O' : 'X';
}

function handleCellClick(cellClick) {
  const {cellIndex} = cellClick.dataset;

  if (filledCells[cellIndex] !== undefined) return;
  
  changeGameStates(cellIndex);

  removeInactiveClass(resetButton, 'button__reset');
  resetButton.addEventListener('click', resetGame);

  handleSound();
  
  drawFigure(cellClick);
  addInactiveClass(cellClick, 'cell');

  if (gameSteps > 4) showResult();
}

if (!gameOver) {
  gameField.addEventListener('click', event => {
    if (event.target.classList.contains('cell') && !gameOver) handleCellClick(event.target);
  });
}


// Implement game result pop-up
const blackout = document.querySelector('.blackout');
const gameResultPopUp = document.querySelector('.pop-up');
const gameResultPopUpMessage = document.querySelector('.pop-up__message');
const gameResultPopUpResetButton = document.querySelector('.pop-up__button');

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

const showDrawResultMessage = () => 'Game ended in a draw!';
const showWinnerResultMessage = (winningPlayer) => `Player '${winningPlayer}' has won the game. Steps: ${gameSteps}`;

let gameOverMessages = [];

function showResult() {
  let gameOverMessage = '';

  const result = getResult();

  if (!result) return;

  if (result == 'draw') gameOverMessage = showDrawResultMessage(); 

  if (typeof(result) == 'object') {
    const {winningCombination, winnerFigure} = result;
    gameOverMessage = showWinnerResultMessage(winnerFigure);
    winningCombination.forEach(cell => document.querySelector(`[data-cell-index="${cell}"]`).classList.add('winner'));
  }

  gameOver = true;

  cells.forEach(cell => addInactiveClass(cell, 'cell'));

  addInactiveClass(resetButton, 'button__reset');
  resetButton.removeEventListener('click', clearGameField);

  addInactiveClass(historyButton, 'button__history');
  historyButton.removeEventListener('click', showGameHistoryPopUp);

  setTimeout(() => showGameResult(gameOverMessage), 500);

  gameOverMessages.unshift(gameOverMessage);

  if (gameOverMessages.length > 10) gameOverMessages.pop();
}

function getResult() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const winningCombination = winningCombinations[i];
    
    const filledCellCombination = winningCombination.map(cell => filledCells[cell]);
    
    if (filledCellCombination.includes(undefined)) continue;

    if ([...new Set(filledCellCombination)].length == 1) return {
      winningCombination,
      winnerFigure: filledCellCombination[0],
    }
  }

  if (!filledCells.includes(undefined) && gameSteps == cells.length) return 'draw';
}

function showGameResult(message) {
  const shawElements = [blackout, gameResultPopUp];
  shawElement(shawElements);

  gameResultPopUpMessage.textContent = message;
}

// Close game result pop-up and reset game
function closeGameResultPopUpAndResetGame() {
  const hideElements = [gameResultPopUp, blackout];

  hideElement(hideElements);
  resetGame();
  historyButton.addEventListener('click', showGameHistoryPopUp);
  removeInactiveClass(historyButton, 'button__history');
}

gameResultPopUpResetButton.addEventListener('click', closeGameResultPopUpAndResetGame);

// Implement game history pop-up
const gameHistoryPopUp = document.querySelector('.history');
const gameHistoryPopUpCloseButton = document.querySelector('.history__button-close');

function showGameHistoryPopUp() {
  const shawElements = [blackout, gameHistoryPopUp];
  shawElement(shawElements);
  
  gameOverMessages.forEach((message, index) => {
    const div = document.createElement('div');
    div.classList.add('history__record');
    div.textContent = `${index + 1}. ${message}`;
    gameHistoryPopUp.append(div);
  })
}

historyButton.addEventListener('click', showGameHistoryPopUp);

// Close game history pop-up
function closeHistory() {
  const historyRecords = document.querySelectorAll('.history__record');

  const hideElements = [gameHistoryPopUp, blackout];
  hideElement(hideElements);
  setTimeout(() => historyRecords.forEach(record => record.remove()), 450);
}

gameHistoryPopUpCloseButton.addEventListener('click', closeHistory);


// Work with sound button
const soundButton = document.querySelector('.sound');
const soundButtonIcon = document.querySelector('.button__sound-icon');

function toggleSoundButton() {
  const soundIcon = playSound ? 'unmute' : 'mute';
  soundButtonIcon.setAttribute('href', `./assets/svg/sprite.svg#${soundIcon}`);
}

function handleSoundButton() {
  playSound = playSound ? false : true;
  toggleSoundButton();
}

soundButton.addEventListener('click', handleSoundButton);


// Work with localStorage
// Save data to localStorage on page beforeunload
function setLocalStorage() {
  const entriesForLocalStorage = [['gameOverMessages', gameOverMessages]];
  entriesForLocalStorage.forEach(entry => localStorage.setItem(entry[0], entry[1]));
}

window.addEventListener('beforeunload', setLocalStorage);

// Get data from localStorage on page load
function getLocalStorage() {
  const localStorageGameOverMessages = localStorage.getItem('gameOverMessages');

  if (localStorageGameOverMessages) gameOverMessages = localStorageGameOverMessages.split(',');
}

window.addEventListener('load', getLocalStorage);


// Cache sounds
const playerSounds = ['X', 'O'];

function preloadPlayerSounds() {
  playerSounds.forEach(sound => {
      const audio = new Audio();
      audio.src = `./assets/audio/Click${sound}.mp3`;
  });
  
}
preloadPlayerSounds();

console.log(`Самооценка за задание 70 баллов
1. Вёрстка +10
    - реализован интерфейс игры +5
    - в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5
2. При кликах по игровому полю по очереди отображаются крестики и нолики. Первая фигура всегда крестик +10
3. Игра завершается, когда три фигуры выстроились в ряд по вертикали, горизонтали или диагонали +10
4. По окончанию игры выводится её результат - выигравшая фигура и количество ходов от начала игры до её завершения +10
5. Результаты последних 10 игр сохраняются в local storage. Есть таблица рекордов, в которой отображаются результаты предыдущих 10 игр +10
6. Анимации или звуки, или настройки игры. Баллы начисляются за любой из перечисленных пунктов +10
7. Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10
   - высокое качество оформления приложения предполагает собственное оригинальное оформление равное или отличающееся в лучшую сторону по сравнению с демо +10`);