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

1. Смена изображений в секции portfolio +25
    - при кликах по кнопкам Winter, Spring, Summer, Autumn в секции portfolio отображаются изображения из папки с соответствующим названием +20
    - кнопка, по которой кликнули, становится активной т.е. выделяется стилем. Другие кнопки при этом будут неактивными +5
2. Перевод страницы на два языка +25
   - при клике по надписи ru англоязычная страница переводится на русский язык +10
   - при клике по надписи en русскоязычная страница переводится на английский язык +10
   - надписи en или ru, соответствующие текущему языку страницы, становятся активными т.е. выделяются стилем +5
3. Переключение светлой и тёмной темы +25
   - Верстка соответствует второму макету. Изменения затронули все блоки и секции, в том числе поменялись фоновые изображения и есть два варианта меню на выбор Макет в figma - светлая тема - 2. 
   В блоке header при наведении на иконки использовала белый цвет, т.к. тот, что указан в макете, плохо видно
   - На страницу добавлен переключатель при клике по которому:
       - тёмная тема приложения сменяется светлой +10
       - светлая тема приложения сменяется тёмной +10
       - после смены светлой и тёмной темы интерактивные элементы по-прежнему изменяют внешний вид при наведении и клике и при этом остаются видимыми на странице (нет ситуации с белым шрифтом на белом фоне) +5
4. Дополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы +5  
5. Дополнительный функционал: сложный эффект для кнопок при наведении +5`);