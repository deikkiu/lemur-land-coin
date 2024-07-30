import { Coin } from "./coin.js";

const coin = new Coin();

// lemur
const lemur = document.querySelector('.coin');

lemur.addEventListener('click', (event) => {
  const rect = lemur.getBoundingClientRect();

  const plusOne = document.createElement('img');
  plusOne.classList.add('plus-one');
  plusOne.src = './assets/coin.png';
  plusOne.alt = 'Coin';

  plusOne.style.top = `${event.clientY - rect.top}px`;
  plusOne.style.left = `${event.clientX - rect.left}px`;

  lemur.appendChild(plusOne);

  setTimeout(() => {
    plusOne.remove();
  }, 2000);

  coin.updateScore();
});

