const gameField = document.querySelector('.game-field');
const restartButton = document.querySelector('.button-restart');
const playButton = document.querySelector('.button-play');

function hidePlayButton() {
  playButton.classList.add('hide');
} 

function drawGameField() {
  hidePlayButton();
  gameField.classList.remove('hide');
  restartButton.classList.remove('hide');
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
}

gameField.addEventListener('click', event => {
  if (event.target.classList.contains('cell')) handleCellClick(event.target);
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

/*function getResult() {
  for (let i = 0; i < 8; i++) {
    const winCombination = winningCombinations[i];
    let a = clickedCells[winCombination[0]];
    let b = clickedCells[winCombination[1]];
    let c = clickedCells[winCombination[2]];
    if (a === undefined || b === undefined || c === undefined) {
        continue;
    }
    if (a === b && b === c) {
      return {
        win: winCombination,
        figure: a,
      }
    }
  }
}*/

const cells = document.querySelectorAll('.cell');

function resetGame() {
  gameSteps = 0;
  currentPlayer = 'X';

  cells.forEach(cell => cell.textContent = '');

  playedCells = [];
}

restartButton.addEventListener('click', resetGame);