// Покраска всех карточек

const productCards = document.querySelectorAll('.products__item');
const repaintCardAllButton = document.querySelector ('#repaint-all-cards');
const greenColorHash = '#00ff00';
const blueColorHash = '#0000ff';

repaintCardAllButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})

// Покраска одной карточки

const firsrProductCards = document.querySelector('.products__item');
const repaintFirstCardButton= document.querySelector ('#repaint-first-card');

repaintFirstCardButton.addEventListener('click', () => {
  firsrProductCards.style.backgroundColor = blueColorHash;
})

// Открыть google

const openGoogleBetton = document.querySelector('#open-google');

openGoogleBetton.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open('https://google.com')
  }
  else {
    return;
  }
}

//вывод консоль лог

const outputLogButton = document.querySelector('#output-console-log'); 

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №6'))

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}