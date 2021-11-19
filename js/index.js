const cards = document.querySelectorAll('.memory-card');

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
    //  click two
    isRotate = false;
    secondCard = this;

    checkMatching();
}

function checkMatching() {
    if (firstCard.dataset.webimg === secondCard.dataset.webimg) {
        // is matching!
        firstCard.removeEventListener('click', cardClicked);
        secondCard.removeEventListener('click', cardClicked);
    } else {
        // is no mathing
        lockCards = true;

        setTimeout(() => {
            lockCards = false;

            firstCard.classList.remove('rotate');
            secondCard.classList.remove('rotate');
        }, 1000);
    }
}

cards.forEach(card => card.addEventListener('click', cardClicked));