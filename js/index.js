const cards = document.querySelectorAll('.memory-card');
const reset_btn = document.querySelector('.reset-btn');

let isRotate = false;
let lockCards = false;
let firstCard, secondCard;

function cardClicked() {
  if (lockCards) return;
  if (this === firstCard) return;

  this.classList.add('rotate');

  if (!isRotate) {
    // click one
    isRotate = true;
    firstCard = this;

    return;
  }
  // click two
  secondCard = this;

  checkMatching();
}

function checkMatching() {
  if (firstCard.dataset.webimg === secondCard.dataset.webimg) {
    // is matching!
    firstCard.removeEventListener('click', cardClicked);
    secondCard.removeEventListener('click', cardClicked);

    resetCards();
  } else {
    // is no mathing
    lockCards = true;
    hideCard();
  }
}

function hideCard() {
  setTimeout(() => {
    firstCard.classList.remove('rotate');
    secondCard.classList.remove('rotate');

    resetCards();
  }, 1000);
}

function resetCards() {
  [isRotate, lockCards] = [false, false];
  [firstCard, secondCard] = [null, null];
}
// mix card in random order
mixCards();

function mixCards() {
  cards.forEach((card) => {
    let position = Math.floor(Math.random() * 12);
    card.style.order = position;
  });
}

function resetBoards() {
  mixCards();
  resetCards();
  // rotate card & refresh events
  cards.forEach((card) => {
    card.classList.remove('rotate');
    card.addEventListener('click', cardClicked);
  });
}

cards.forEach((card) => card.addEventListener('click', cardClicked));
reset_btn.addEventListener('click', resetBoards);
