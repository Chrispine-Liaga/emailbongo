// =========================
// Word List
// =========================
const wordList = [
  "Droëwors", "Protea", "Isidingo", "Clifton", "Zulu Dancing",
  "Rugby", "Amarula", "Walkie Talkies", "Rhythm City", "Cheetahs (Rugby)",
  "Great White Shark", "Durban", "Chapman’s Peak Drive", "Nelspruit", "Buffalo",
  "Springbok (Animal)", "Namaqualand Flowers", "Alexandra", "Brits", "Thabo Mbeki",
  "Samp and Beans", "Freedom Day", "Fatima Meer", "Durbanville", "Pretoria",
  "Orlando Pirates", "Rhodes University", "Malelane", "Camps Bay", "Sotho Dance",
  "Roodepoort", "Two Oceans Aquarium", "Kaapsehoop", "Gugulethu", "Bulls (Rugby)",
  "Wild Coast", "Sandton", "Nelson Mandela", "Limpopo", "University of Venda",
  "George", "Chakalaka Sandwich", "Lucky Dube", "Khayelitsha", "Chief Albert Luthuli",
  "Pilanesberg", "Lions (Rugby)", "Snook and Chips", "Kruger National Park", "Smiley",
  "Shark (Rugby)", "Cape Argus Cycle Tour", "Phalaborwa", "Mopane Worms", "Yebo Gogo",
  "Desmond Tutu", "Clarens", "Mbube", "Magwinya", "Pofadder",
  "Cyril Ramaphosa", "Ermelo", "Midrand", "Two Oceans Marathon", "Malva Cupcake",
  "Johannesburg", "Heritage Milkshake", "Steve Biko", "Valley of Desolation", "University of Johannesburg",
  "Mzansi Magic", "Skilpadjies", "Butterworth", "Underberg", "Knysna",
  "Garden Route", "Shaka Zulu", "Boerie Roll", "Port Shepstone", "Golden Gate",
  "Rooibos Tea", "Boksburg", "Bobotie", "Richards Bay", "Sasolburg",
  "Heugh Masekela", "Biltong", "Vaalwater", "Dusi Canoe Marathon", "Franschhoek",
  "Skeem Saam", "National Braai Day", "Long Street", "Cape Point", "Soweto",
  "Mthatha", "House Music SA", "Lilian Ngoyi", "Fynbos", "Stellenbosch University"
];

// =========================
// DOM Elements
// =========================
const board = document.getElementById("bingo-board");
const counter = document.getElementById("counter");
const generateBtn = document.getElementById("generateBtn");
const resetBtn = document.getElementById("resetBtn");
const longestChainDisplay = document.getElementById("longestChain");
const screenshotBtn = document.getElementById("screenshotBtn");

let generateCount = 0;
let longestChain = 0;
let locked = false;

const SIZE = 8; // 8x8 grid

// =========================
// Utility: Shuffle array
// =========================
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]
    ];
  }
  return array;
}

// =========================
// Generate a new bingo board
// =========================
function generateCard() {
  if (locked) return;
  board.innerHTML = "";
  longestChain = 0;
  updateLongestChain(0);

  const selected = shuffle([...wordList]).slice(0, SIZE * SIZE);

  for (let i = 0; i < SIZE * SIZE; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.dataset.index = i;
    cell.innerHTML = `<span>${selected[i]}</span>`;
    board.appendChild(cell);
  }

  generateCount++;
  counter.textContent = generateCount;
  addCellClickListeners();
}

// =========================
// Reset the game
// =========================
function resetBoard() {
  board.innerHTML = "";
  counter.textContent = 0;
  generateCount = 0;
  longestChain = 0;
  updateLongestChain(0);
  locked = false;
}

// =========================
// Add click listeners to cells
// =========================
function addCellClickListeners() {
  document.querySelectorAll(".cell").forEach(cell => {
    cell.addEventListener("click", () => {
      if (locked || cell.classList.contains("crossed")) return;

      cell.classList.add("crossed");
      checkWin(cell.dataset.index);
    });
  });
}

// =========================
// Update longest chain tracker
// =========================
function updateLongestChain(length) {
  if (length > longestChain) {
    longestChain = length;
    longestChainDisplay.textContent = longestChain;
  }
}

// =========================
// Check win condition (rows, cols, diagonals)
// =========================
function checkWin(lastClickedIndex) {
  function checkLine(indices) {
    let current = 0;
    let max = 0;
    indices.forEach(i => {
      const cell = document.querySelector(`.cell[data-index='${i}']`);
      if (cell && cell.classList.contains("crossed")) {
        current++;
        max = Math.max(max, current);
      } else {
        current = 0;
      }
    });
    updateLongestChain(max);

    // ✅ Show BINGO only after last (8th) tile in a line is clicked
    if (indices.every(i => {
      const cell = document.querySelector(`.cell[data-index='${i}']`);
      return cell && cell.classList.contains("crossed");
    })) {
      if (indices.includes(parseInt(lastClickedIndex))) {
        setTimeout(() => {
          alert("BINGO! You win 🎉");
          locked = true;
        }, 200);
      }
    }
  }

  // Rows
  for (let r = 0; r < SIZE; r++) {
    const row = [];
    for (let c = 0; c < SIZE; c++) row.push(r * SIZE + c);
    checkLine(row);
  }

  // Cols
  for (let c = 0; c < SIZE; c++) {
    const col = [];
    for (let r = 0; r < SIZE; r++) col.push(r * SIZE + c);
    checkLine(col);
  }

  // Main diagonal
  const diag1 = [];
  for (let i = 0; i < SIZE; i++) diag1.push(i * SIZE + i);
  checkLine(diag1);

  // Anti-diagonal
  const diag2 = [];
  for (let i = 0; i < SIZE; i++) diag2.push(i * SIZE + (SIZE - 1 - i));
  checkLine(diag2);
}

// =========================
// Screenshot download (only left panel)
// =========================
function downloadScreenshot() {
  const leftPanel = document.querySelector(".left");
  html2canvas(leftPanel, {
    backgroundColor: "#14532d" // ensure the green background is captured
  }).then(canvas => {
    const link = document.createElement("a");
    link.download = "bingo-board.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}

// =========================
// Event listeners
// =========================
generateBtn.addEventListener("click", generateCard);
resetBtn.addEventListener("click", resetBoard);
screenshotBtn.addEventListener("click", downloadScreenshot);

// =========================
// Initial board load
// =========================
generateCard();
