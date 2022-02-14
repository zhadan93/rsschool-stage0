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
  return language == 'en' ? quotes[index] : russianQuotes[index];
}

function changeTranslate(lang) {
  const quoteTranslate = getTranslate(lang);
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
