import russianQuotes from './quotes.js';

const blockquoteContent = document.querySelector('.blockquote__content');
const blockquoteAuthor = document.querySelector('.blockquote__author');

let quotes = [];

function randomInteger(min, max) {
  const random = min + Math.random() * (max + 1 - min);

  return Math.floor(random);
}

function changeQuote({text, author}) {
  blockquoteAuthor.textContent = author;
  blockquoteContent.textContent = `"${text}"`;
}

let randomQuote = 0;

function changeRandomQuote() {
  randomQuote = randomInteger(0, 300);

  const quoteObject = language == 'en' ? quotes : russianQuotes;

  changeQuote(quoteObject[randomQuote]); 
}

async function getQuotes() {
  const res = await fetch('https://type.fit/api/quotes');
  return await res.json(); 
}

async function setQuote() {
  const quoteData = await getQuotes();
  quotes = quoteData;
  changeRandomQuote();
}
setQuote();

const blockquote = document.querySelector('.blockquote');
const button = document.querySelector('.button');

function blurBackground() {
  blockquote.classList.toggle('blur');
  setTimeout(() => blockquote.classList.toggle('blur'), 800);
}

function changeRandomQuoteAndBackground () {
  blurBackground();
  setTimeout(changeRandomQuote, 200);
}

button.addEventListener('click', changeRandomQuoteAndBackground);


const langButtonContainer = document.querySelector('.header__lang');
let language = 'en';

function changeClass(className, activeElement) {
  document.querySelectorAll(`.${className}`).forEach(button => {
     button.classList.remove(`${className}-active`)
  });
  activeElement.classList.add(`${className}-active`);
}


function getTranslate(lang) {
  const index = language == 'en' ? quotes.findIndex(item => `"${item.text}"` === blockquoteContent.textContent) : russianQuotes.findIndex(item => `"${item.text}"` === blockquoteContent.textContent); 

  language = lang;

  return language == 'en' ? {
      'quoteTranslate' : quotes[index],
      'buttonTranslate' : 'Generate new',
    } : {
      'quoteTranslate' : russianQuotes[index],
      'buttonTranslate' : 'Сгенерировать новую',
    };
}

function changeTranslate(lang) {
  const translate = getTranslate(lang);
  const {quoteTranslate, buttonTranslate} = translate;

  button.textContent = buttonTranslate;
  changeQuote(quoteTranslate); 
}

const langButtonClassName = 'lang__button';

langButtonContainer.addEventListener('click', event => {
  if (event.target.classList.contains(langButtonClassName)) {
    const {lang} = event.target.dataset;
    
    changeTranslate(lang);
    changeClass(langButtonClassName, event.target);
  }
});

console.log(`Самооценка за задание 70 баллов
1. Вёрстка +10
    - на странице есть цитата и кнопка для смены цитаты +5
    - в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5
2. При загрузке страницы приложения отображается рандомная цитата +10
3. При перезагрузке страницы цитата обновляется (заменяется на другую) +10
4. Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) +10
5. Смена цитаты сопровождается любым другим эффектом, например, изменяется изображение или меняется фоновый цвет страницы, или проигрывается звук и т.д * +10
6. Можно выбрать один из двух языков отображения цитат: en/ru +10
7. Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10
   - высокое качество оформления приложения предполагает собственное оригинальное оформление равное или отличающееся в лучшую сторону по сравнению с демо +10`);