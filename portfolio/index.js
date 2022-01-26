const humburger = document.querySelector('.humburger');
const navMenu = document.querySelector('.nav');
const page = document.querySelector('.shadow');

function closeMenu() {
   humburger.classList.toggle('open');
   navMenu.classList.toggle('open');
   page.classList.toggle('open');
}

function closeMenuWithLink(event) {
  if (event.target.classList.contains('nav__link')) closeMenu();
}

humburger.addEventListener('click', closeMenu);

navMenu.addEventListener('click', closeMenuWithLink);

const galleryImages = document.querySelectorAll('.gallery__img');
const galleryButtonContainer = document.querySelector('.button__container');

function changeImage(season) {
   galleryImages.forEach((item, index) => item.src = `assets/img/${season}/${index + 1}.jpg`);
}

galleryButtonContainer.addEventListener('click', function(event) {
   if (event.target.classList.contains('button')) changeImage(event.target.dataset.season);
});





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