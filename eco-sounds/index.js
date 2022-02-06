const birdContainer = document.querySelector('.header__container');
const birdNav = document.querySelectorAll('.nav__item');
const logo = document.querySelector('.logo');
const main = document.querySelector('.main');

function changeActive(activeElement, className) {
  birdNav.forEach(item => item.classList.remove('nav__item_active'));
  logo.classList.remove('logo_active');
  activeElement.classList.add(`${className}_active`);
}

birdContainer.addEventListener('click', event => {
  if (event.target.classList.contains('nav__item')) { 
    changeActive(event.target, 'nav__item');
    changeBirdImage(event.target.dataset.bird);
  }
});

logo.addEventListener('click', () => {
  changeActive(logo, 'logo');
  changeBirdImage(logo.dataset.bird);
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