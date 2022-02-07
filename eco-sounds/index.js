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


console.log(`Самооценка за задание 60 баллов
1. Вёрстка +10
    - есть не меньше пяти интерактивных элементов, с которыми пользователи могут взаимодействовать. Изменение внешнего вида самого элемента и состояния курсора при наведении, плавные анимации +5
    - в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5
2. При кликах по интерактивным элементам меняется изображение +10
3. При кликах по интерактивным элементам меняется звук +10
4. Активный в данный момент интерактивный элемент выделяется стилем +10  
5. Кнопка Play/Pause +20
    - есть кнопка Play/Pause, при клике по которой можно запустить или остановить проигрывание звука +10
    - внешний вид и функционал кнопки Play/Pause изменяется в зависимости от того, проигрывается ли в данный момент звук +10`);