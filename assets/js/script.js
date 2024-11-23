'use strict';

const symbols = ["🍎", "🍎", "🍌", "🍌", "🍇", "🍇", "🍓", "🍓"];
let flippedCards = [];
let matchedPairs = 0;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function createGameBoard() {
  const gameBoard = document.getElementById("gameBoard");
  gameBoard.innerHTML = "";
  const shuffledSymbols = shuffle(symbols);

  shuffledSymbols.forEach((symbol) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.symbol = symbol;
    card.addEventListener("click", flipCard);
    gameBoard.appendChild(card);
  });
}

function flipCard() {
  if (flippedCards.length >= 2) return;

  this.classList.add("flipped");
  this.textContent = this.dataset.symbol;
  flippedCards.push(this);

  if (flippedCards.length === 2) {
    checkMatch();
  }
}

function checkMatch() {
  const [card1, card2] = flippedCards;
  if (card1.dataset.symbol === card2.dataset.symbol) {
    matchedPairs++;
    flippedCards = [];
    if (matchedPairs === symbols.length / 2) {
      document.getElementById("status").textContent = "You Win! 🎉";
    }
  } else {
    setTimeout(() => {
      card1.classList.remove("flipped");
      card1.textContent = "";
      card2.classList.remove("flipped");
      card2.textContent = "";
      flippedCards = [];
    }, 1000);
  }
}

createGameBoard();