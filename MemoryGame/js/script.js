'use strict';

const cards = document.querySelectorAll('.memory-card');

let checkFlip = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.add('flip');
  if (!checkFlip){
    checkFlip = true;
    firstCard = this;
    return
  }
  secondCard = this;
  checkFlip = false;
  checkMatch()
}

function checkMatch(){
  if (firstCard.dataset.animal === secondCard.dataset.animal){
    console.log(firstCard.dataset.animal)
    console.log(secondCard.dataset.animal)
    console.log('match')
    disableCards();
    return;
  }
  unflipCards();
}

function disableCards() {
   firstCard.removeEventListener('click', flipCard);
   secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
   setTimeout(() => {
     firstCard.classList.remove('flip');
     secondCard.classList.remove('flip');
   }, 100);
}

cards.forEach(card => card.addEventListener('click', flipCard));
// for (let i = 0; i <cards.length; i ++){
//   cards[i].addEventListener('click', flipCard);
// }
