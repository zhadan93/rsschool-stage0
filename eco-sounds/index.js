const birdContainer = document.querySelector('.header__container');
const birdNav = document.querySelectorAll('.nav__item');
const logo = document.querySelector('.logo');
const main = document.querySelector('.main');

let isPlay = false;
let activeBird = 'forest';

function changeActive(activeElement, className) {
  birdNav.forEach(item => item.classList.remove('nav__item_active'));
  logo.classList.remove('logo_active');
  activeElement.classList.add(`${className}_active`);
}

birdContainer.addEventListener('click', event => {
  if (event.target.classList.contains('nav__item')) { 
    activeBird = event.target.dataset.bird;
    changeActive(event.target, 'nav__item');
    changeBirdImage(activeBird);
    isPlay = true;
    changeAudio();
  }
});

logo.addEventListener('click', () => {
  activeBird = logo.dataset.bird;
  changeActive(logo, 'logo');
  changeBirdImage(activeBird);
  isPlay = true;
  changeAudio();
});


const birds = ['forest', 'nightingale', 'thrush', 'robin', 'lark', 'warbler'];

function preloadBirdImages() {
  birds.forEach(birds => {
    const img = new Image();
    img.src = `./assets/img/${birds}.jpg`;  
  });  
}
preloadBirdImages();

function changeBirdImage(bird) {
  main.style.backgroundImage = `url('./assets/img/${bird}.jpg')`;
}

const playButton = document.querySelector('.play');
const playButtonIcon = document.querySelector('.play__btn-icon');
const audio = new Audio();

function togglePlayAudio() {
  audio.src = `./assets/audio/${activeBird}.mp3`;
  audio.currentTime = 0; 

  isPlay ? audio.play() : audio.pause();
}

function changePlayButton() {
  const playIcon = isPlay ? 'pause' : 'play';

  playButtonIcon.setAttribute('href', `./assets/svg/sprite.svg#${playIcon}`);
}

function changeAudio() {
  changePlayButton();
  togglePlayAudio();
}

playButton.addEventListener('click', () => {
  isPlay = isPlay ? false : true;

  changeAudio();
})
