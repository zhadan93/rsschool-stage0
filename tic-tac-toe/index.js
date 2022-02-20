const gameField = document.querySelector('.game-field');
const restartButton = document.querySelector('.button-restart');
const playButton = document.querySelector('.button-play');

function drawGameField() {
  gameField.classList.remove('hide');
  restartButton.classList.remove('hide');
}

function hidePlayButton() {
  playButton.classList.add('hide');
} 

function showPlayingField() {
  hidePlayButton();
  drawGameField();
}

playButton.addEventListener('click', showPlayingField);


let figure = 'X';
let clickedCells = [];

function drawFigure(event) {
  const {cellIndex} = event.dataset;

  if (clickedCells[cellIndex] !== undefined) return; 

  clickedCells[cellIndex] = figure;
  event.textContent = figure == 'X' ? figure : 'O';
  figure = figure == 'X' ? 'O' : 'X';
}

gameField.addEventListener('click', event => {
  if (event.target.classList.contains('cell')) drawFigure(event.target);
})