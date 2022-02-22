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


let isPlay = true;

const sound = document.querySelector('.sound');
const soundButton = document.querySelector('.button__sound-icon');

const audio = new Audio();
audio.src = `./assets/audio/clickX.mp3`;
audio.currentTime = 0;

function toggleSoundButton () {
  soundIcon = isPlay == true ?  'unmute' : 'mute';
  soundButton.setAttribute('href', `./assets/svg/sprite.svg#${soundIcon}`)
}

function toggleVolume() {
  audio.volume = isPlay == true ? 1 : 0;
}

function handleButtonSound() {
  isPlay = isPlay == true ? false : true;
  toggleVolume();
  toggleSoundButton();
}

sound.addEventListener('click', handleButtonSound);


let gameSteps = 0;
let currentPlayer = 'X';
let playedCells = [];

function togglePlayerSound() {
  audio.src = `./assets/audio/click${currentPlayer}.mp3`;
}

function togglePlayingSound() {
  isPlay == true ? audio.play() : audio.pause();
}

function handleSound() {
  togglePlayerSound();
  togglePlayingSound()
}

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
  
  drawFigure(cellClick);
  handleSound();
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

function showWinner(message) {
  winner = true;

  const shawElements = [blackout, popUp];
  shawElement(shawElements);

  popUpMessage.textContent = message;
}

function showResult() {
  let message = '';
  const winner = getResult();

  if (winner == 'draw') message = showDrawMessage(); 
  if (typeof(winner) == 'object') {
    const {winCombination, win} = winner;
    message = showResultMessage(win);
    winCombination.forEach(item => document.querySelector(`[data-cell-index="${item}"]`).classList.add('winner'));
  }

  if (winner !== undefined) {
    setTimeout(() => showWinner(message), 500);

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
    cell.classList.remove('winner');
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