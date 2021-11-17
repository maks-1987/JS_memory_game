const cards = document.querySelectorAll('.memory-card');

function cardClicked() {
    this.classList.toggle('rotate');
}

cards.forEach(card => card.addEventListener('click', cardClicked));