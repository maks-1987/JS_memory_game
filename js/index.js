const cards = document.querySelectorAll('.memory-card');
// const el = document.querySelector('#user');

let isRotate = false;
let lockCards = false;
let firstCard, secondCard;

function cardClicked() {
    if (lockCards) return;
    if (this === firstCard) return;

    this.classList.add('rotate');

    if (!isRotate) {
        isRotate = true;
        firstCard = this;
    } else {
        isRotate = false;
        secondCard = this;

        console.log(firstCard.dataset.webimg);
        console.log(secondCard.dataset.webimg);

        if (firstCard.dataset.webimg === secondCard.dataset.webimg) {
            // is matching!
            firstCard.removeEventListener('click', cardClicked);
            secondCard.removeEventListener('click', cardClicked);
        } else {
            // is no mathing
            setTimeout(() => {
                firstCard.classList.remove('rotate');
                secondCard.classList.remove('rotate');
            }, 1000);

        }
    }
}

cards.forEach(card => card.addEventListener('click', cardClicked));