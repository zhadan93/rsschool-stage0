import i18Obj from './translate.js';

const humburger = document.querySelector('.humburger');
const navMenu = document.querySelector('.nav');
const shadow = document.querySelector('.shadow');

function closeMenu() {
   humburger.classList.toggle('open');
   navMenu.classList.toggle('open');
   shadow.classList.toggle('open');
}

function closeMenuWithLink(event) {
  if (event.target.classList.contains('nav__link')) closeMenu();
}

humburger.addEventListener('click', closeMenu);
navMenu.addEventListener('click', closeMenuWithLink);


const galleryImages = document.querySelectorAll('.gallery__img');
const galleryButtonContainer = document.querySelector('.portfolio__container');

function changeGalleryImage(season) {
   galleryImages.forEach((img, index) => {
      img.src = `assets/img/${season}/${index + 1}.jpg`
   });
}

function changeClass(className, activeElement) {
   document.querySelectorAll(`.${className}`).forEach(button => {
      button.classList.remove(`${className}_active`)
   });
   activeElement.classList.add(`${className}_active`);
}

const buttonClassName = 'portfolio__button';

galleryButtonContainer.addEventListener('click', event => {

   if (event.target.classList.contains(buttonClassName)) {
      changeGalleryImage(event.target.dataset.i18n);
      changeClass(buttonClassName, event.target);
   }
});

const seasons = ['autumn', 'spring', 'summer', 'winter'];

function preloadPortfolioImages() {
  seasons.forEach(season => {
    for (let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `assets/img/${season}/${i}.jpg`;
    }
  });
  
}
preloadPortfolioImages();


const langButtonContainer = document.querySelector('.header__lang');
let language = 'en';

function getTranslate(lang, element) {
  return i18Obj[lang][element.dataset.i18n];
}

function changeTranslate(lang) {
  const elementsWithDataAtribute = document.querySelectorAll('[data-i18n]');
  
  elementsWithDataAtribute.forEach(element => {
    if (element.placeholder) {
      element.placeholder = `${getTranslate(lang, element)}`;
    } else {
      element.textContent = getTranslate(lang, element);
    }
  })
}

const langButtonClassName = 'lang__button';

langButtonContainer.addEventListener('click', event => {
  if (event.target.classList.contains(langButtonClassName)) {
    const {lang} = event.target.dataset;
    language = lang;
    changeTranslate(lang);
    changeClass(langButtonClassName, event.target);
  }
});


let theme = 'dark';
const themeSwitchButton = document.querySelector('.them-button');
const themButtonSun = document.querySelector('.them-button__sun');
const mas = ['.page', '.header', '.them-button__icon', '.hero__container', '.main__button', '.portfolio__button',
  '.contacts__container', '.contacts__entry-field', '.price__button'];

function changeTheme() {
  const res = [];
  themButtonSun.setAttribute('href', `./assets/svg/sprite.svg#${theme}`);
  mas.forEach(item => res.push(...document.querySelectorAll(item)));
  res.forEach(item => item.classList.toggle(`light-theme`));
}

themeSwitchButton.addEventListener('click', () => {
  theme = (theme == 'dark') ? 'light' : 'dark';
  changeTheme();
});


function setLocalStorage(entries) {
  entries.forEach(entry => localStorage.setItem(entry[0], entry[1]));
}

window.addEventListener('beforeunload', () => {
  const entriesForLocalStorage = [['lang', language], ['theme', theme]];
  setLocalStorage(entriesForLocalStorage);
});


function getLocalStorage() {
  const localStorageLang = localStorage.getItem('lang');
  const localStorageTheme = localStorage.getItem('theme');
  
  if (localStorageLang) {
    language = localStorageLang;
    changeTranslate(language);
    changeClass(langButtonClassName, document.querySelector(`[data-lang='${language}']`));
  }
  
  if (localStorageTheme === 'light') {
    theme = localStorageTheme;
    changeTheme();
  }
}
window.addEventListener('load', getLocalStorage);






console.log(`Самооценка за задание 85 баллов

1. Вёрстка соответствует макету. Ширина экрана 768px +48
    - блок <header> +6
    - секция hero +6
    - секция skills +6
    - секция portfolio +6
    - секция video +6
    - секция price +6
    - секция contacts +6
    - секция <footer> +6
2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15
   - нет полосы прокрутки при ширине страницы от 1440рх до 768рх +5
   - нет полосы прокрутки при ширине страницы от 768рх до 480рх +5
   - нет полосы прокрутки при ширине страницы от 480рх до 320рх +5
3. На ширине экрана 768рх и меньше реализовано адаптивное меню +22
   - при ширине страницы 768рх панель навигации скрывается, появляется бургер-иконка +2
   - при нажатии на бургер-иконку справа плавно появляется адаптивное меню, бургер-иконка изменяется на крестик +4
   - высота адаптивного меню занимает всю высоту экрана. При ширине экрана 768-620рх вёрстка меню соответствует макету, когда экран становится уже, меню занимает всю ширину экрана +4
   - при нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку +4
   - бургер-иконка, которая при клике превращается в крестик, создана при помощи css-анимаций без использования изображений +2
   - ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +2
   - при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, крестик превращается в бургер-иконку +4`);