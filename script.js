const emojis = ["💎", "🔥", "🌙", "⚡", "🌸", "🍀", "❄️", "🦋"];
let cards = [...emojis, ...emojis];

let firstCard = null;
let secondCard = null;
let lockBoard = false;

let moves = 0;
let matches = 0;

const grid = document.getElementById("grid");
const movesEl = document.getElementById("moves");
const matchesEl = document.getElementById("matches");
const winText = document.getElementById("winText");
const restartBtn = document.getElementById("restart");

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function createBoard() {
  grid.innerHTML = "";
  shuffle(cards).forEach(icon => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="card-face front"></div>
      <div class="card-face back">${icon}</div>
    `;

    card.addEventListener("click", () => flipCard(card, icon));
    grid.appendChild(card);
  });
}

function flipCard(card, icon) {
  if (lockBoard || card === firstCard?.card || card.classList.contains("flip")) return;

  card.classList.add("flip");

  if (!firstCard) {
    firstCard = { card, icon };
    return;
  }

  secondCard = { card, icon };
  moves++;
  movesEl.textContent = moves;

  checkMatch();
}

function checkMatch() {
  if (firstCard.icon === secondCard.icon) {
    matches++;
    matchesEl.textContent = matches;
    resetTurn();

    if (matches === emojis.length) {
      winText.textContent = "🎉 You matched all crystals!";
    }
  } else {
    lockBoard = true;
    setTimeout(() => {
      firstCard.card.classList.remove("flip");
      secondCard.card.classList.remove("flip");
      resetTurn();
    }, 800);
  }
}

function resetTurn() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

function resetGame() {
  moves = 0;
  matches = 0;
  movesEl.textContent = 0;
  matchesEl.textContent = 0;
  winText.textContent = "";
  createBoard();
}

restartBtn.addEventListener("click", resetGame);

createBoard();
