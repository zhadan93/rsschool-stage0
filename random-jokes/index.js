const blockquoteContent = document.querySelector('.blockquote__content');
const blockquoteAuthor = document.querySelector('.blockquote__author');

let quotes = [];

function randomInteger(min, max) {
  const random = min + Math.random() * (max + 1 - min);

  return Math.floor(random);
}

function changeRandomQuote() {
  const randomQuote = randomInteger(0, quotes.length);
  
  const {text, author} = quotes[randomQuote];

  blockquoteAuthor.textContent = author;
  blockquoteContent.textContent = text;
}

async function getQuote() {
  const res = await fetch('https://type.fit/api/quotes');
  const quoteData = await res.json(); 
  
  quotes = quoteData;
  changeRandomQuote();
}
getQuote();

const button = document.querySelector('.button');

button.addEventListener('click', changeRandomQuote)