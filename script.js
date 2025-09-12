  emailjs.init("public_k2hJWylUNz1SVubGE");
  
  // FULL LIST pasted here
const wordList = [
"Braai", "Biltong", "Pap", "Boerewors", "Vetkoek", "Melktert", 
"Bunny Chow", "Koeksisters", "Samp and Beans", "Rooibos Tea",
 "Malva Pudding", "Chakalaka", "Amarula", "Sosaties", "Potjiekos", 
 "Cape Malay Curry", "Snoek Braai", "Ostrich Steak", "Shisa Nyama", 
 "Milk Stout", "Umqombothi", "Durban Curry", "Koesister (Cape Malay)",
  "Rooibos Cappuccino", "Bobotie", "Koekie", "Tomato Bredie", "Walkie Talkies",
   "Mopane Worms", "Gatsby", "Paptert", "Frikkadel", "Boerie Roll", 
   "Amagwinya", "Mogodu", "Smiley", "Vetkoek and Mince", "Waterblommetjie Bredie",
    "Mampoer", "Magwinya", "Melkkos", "Skilpadjies", "Peppermint Crisp Tart", 
    "Chutney", "Monkeygland Sauce", "Samp", "Morogo", "Imifino", "Boesmanland Plaatkos",
     "Jaffles", "Rusks", "Crunchie", "Milk Tart Slice", "Droëwors", "Karoo Lamb", "Cape Snoek", 
     "Snoek and Chips", "Pickled Fish", "Ting", "Malva Cupcake", "Koeksister Syrup", "Chakalaka Sandwich", 
     "Vetkoek Burger", "Pap and Gravy", "Bunny Chow Quarter", "Rooibos Latte", "Heritage Milkshake", "Nelson Mandela", 
     "Madiba Magic", "Desmond Tutu", "Albertina Sisulu", "Steve Biko", "Shaka Zulu", "Chris Hani", 
     "Sol Plaatje", "Charlotte Maxeke", "Oliver Tambo", "Miriam Makeba", "Hugh Masekela", "Brenda Fassie",
      "Johnny Clegg", "Lucky Dube", "Yvonne Chaka Chaka", "Abdullah Ibrahim", "Jacob Zuma Statue", "Cyril Ramaphosa", 
      "FW de Klerk", "Walter Sisulu", "Lilian Ngoyi", "Robert Sobukwe", "Pixley ka Isaka Seme", "Chief Albert Luthuli", 
      "Govan Mbeki", "Thabo Mbeki", "Ahmed Kathrada", "Fatima Meer", "UCT", "Wits University", "UKZN", "University of Limpopo",
       "University of Fort Hare", "University of Venda", "University of Zululand", "University of Johannesburg",
        "North West University", "Rhodes University", "TUT", "CPUT", "Stellenbosch University", "University of Free State",
         "Nelson Mandela University", "Gauteng", "Johannesburg", "Pretoria", "Soweto", "Maboneng", "Sandton", "Alexandra", 
         "Midrand", "Fourways", "Randburg", "Krugersdorp", "Roodepoort", "Ekurhuleni", "Springs", "Benoni", "Kempton Park", 
         "Boksburg", "Tembisa", "Katlehong", "Germiston", "Western Cape", "Cape Town", "Stellenbosch", "Paarl", "Franschhoek",
          "Somerset West", "Mitchells Plain", "Khayelitsha", "Atlantis", "Langa", "Gugulethu", "Nyanga", "Bellville", "Durbanville",
           "Noordhoek", "Hout Bay", "Clifton", "Camps Bay", "Sea Point", "Mossel Bay", "Knysna", "Plettenberg Bay",
            "George", "Oudtshoorn", "Prince Albert", "Beaufort West", "Northern Cape", "Kimberley", "Upington", 
            "Springbok", "Postmasburg", "Kuruman", "Colesberg", "Calvinia", "Namaqualand", "Sutherland", "Augrabies",
             "Richtersveld", "Pofadder", "Prieska", "Loeriesfontein", "Eastern Cape", "Bhisho", "East London",
              "Port Elizabeth", "Makhanda", "Jeffreys Bay", "Storms River", "Coffee Bay", "Hole in the Wall", 
              "Wild Coast", "Gonubie", "King Williams Town", "Qonce", "Butterworth", "Mdantsane", "Mthatha",
               "KwaZulu-Natal", "Durban", "Pietermaritzburg", "Howick", "Ballito", "Umhlanga", "St Lucia", "Hluhluwe", 
               "iSimangaliso Wetland Park", "Bergville", "Underberg", "Drakensberg", "Richards Bay", "Port Shepstone", 
               "Margate", "Scottburgh", "South Coast", "KZN Midlands", "Shongweni", "North Coast", "Free State", "Bloemfontein", 
               "Welkom", "Parys", "Clarens", "Golden Gate", "Bethlehem", "Sasolburg", "Phuthaditjhaba", "Virginia", "Ficksburg",
                "Senekal", "Ladybrand", "Fouriesburg", "North West", "Mahikeng", "Sun City", "Rustenburg", "Hartbeespoort", 
                "Madikwe", "Pilanesberg", "Klerksdorp", "Potchefstroom", "Brits", "Lichtenburg", "Stilfontein", "Taung", 
                "Limpopo", "Polokwane", "Thohoyandou", "Mokopane", "Tzaneen", "Modimolle", "Bela Bela", "Magoebaskloof", 
                "Vaalwater", "Phalaborwa", "Hoedspruit", "Haenertsburg", "Musina", "Elim", "Soutpansberg", "Mapungubwe", 
                "Mpumalanga", "Mbombela", "White River", "Hazyview", "Sabie", "Graskop", "God’s Window", "Blyde River Canyon",
                 "Barberton", "Lydenburg", "Dullstroom", "Kruger National Park", "Skukuza", "Nelspruit", "Kaapsehoop", 
                 "Komatipoort", "Malelane", "Ermelo", "Secunda", "Standerton", "Volksrust", "Bethal", "Siyabuswa", "Protea", "King Protea", "Blue Crane", "Springbok (Animal)", "Big Five", "Elephant", "Lion", "Rhino", "Leopard", "Buffalo", "Penguins at Boulders", "Dassie", "Meerkat", "Honey Badger", "Aardvark", "Bat-eared Fox", "Flamingo", "Whale Watching", "Great White Shark", "Seal Island", "Cape Fur Seal", "Cape Cobra", "Boomslang", "Secretary Bird", "Fynbos", "Cape Floral Kingdom", "Baobab Tree", "Kalahari Desert", "Namib Desert", "Succulent Karoo", "Namaqualand Flowers", "Cederberg", "Tankwa Karoo", "Table Mountain", "Lion's Head", "Signal Hill", "Cape Point", "Chapman’s Peak Drive", "Robben Island", "Cradle of Humankind", "Sterkfontein Caves", "Union Buildings", "Voortrekker Monument", "Apartheid Museum", "Vilakazi Street", "Gold Reef City", "Montecasino", "V&A Waterfront", "Long Street", "Kirstenbosch Gardens", "Walter Sisulu Botanical Garden", "iSimangaliso Wetlands", "uShaka Marine World", "Two Oceans Aquarium", "Blyde River Boat Cruise", "Augrabies Falls", "Valley of Desolation", "Tsitsikamma", "Garden Route", "Cango Caves", "Shosholoza", "Sarafina", "Isibaya", "7de Laan", "Generations", "Uzalo", "Skeem Saam", "Rhythm City", "Isidingo", "Yizo Yizo", "Zone 14", "Soul City", "Taxi Ride", "Kwela", "Maskandi", "Marabi", "Gqom", "Amapiano", "Kwaito", "House Music SA", "Venda Music", "Xitsonga Songs", "Xhosa Ululation", "Zulu Dancing", "Tsonga Dance", "Sotho Dance", "Venda Reed Dance", "Afrikaans Folk Music", "Drum Circle", "Gumboot Dance", "Marimba", "Mbube", "Isicathamiya", "Kwasa Kwasa", "Rugby", "Soccer", "Cricket", "Springboks", "Proteas (Team)", "Bafana Bafana", "Banyana Banyana", "Orlando Pirates", "Kaizer Chiefs", "Mamelodi Sundowns", "Cape Town Spurs", "Sharks (Rugby)", "Bulls (Rugby)", "Lions (Rugby)", "Cheetahs (Rugby)", "Stormers (Rugby)", "Comrades Marathon", "Two Oceans Marathon", "Cape Argus Cycle Tour", "Dusi Canoe Marathon", "Midmar Mile", "Cape Epic", "Heritage Day", "Freedom Day", "Youth Day", "Human Rights Day", "Women's Day", "Reconciliation Day", "Sharpeville Day", "Elections Day", "National Braai Day", "Ubuntu", "Mzansi", "Mzabalazo", "Mzansi Magic", "Mzansi Fo Sho", "Mzansi Wethu", "Mzansi Pride", "Mzansi Culture", "Mzansi Recipes", "Mzansi Slang", "Yebo Gogo", "Aweh", "Sho’t Left", "Howzit", "Eish", "Hayibo", "Lekker", "Sharp-Sharp", "Jol", "Skedonk", "Spaza", "Kasi", "Ekasi", "Vibes", "Mzabalazo Song"
];
// =========================
// DOM Elements
// =========================
const board = document.getElementById("bingo-board");
const counter = document.getElementById("counter");
const generateBtn = document.getElementById("generateBtn");
const resetBtn = document.getElementById("resetBtn");

const nameInput = document.getElementById("teamName"); // “Your Name”
const provinceInput = document.getElementById("province");
const submitBtn = document.getElementById("submitBtn");
const longestChainDisplay = document.getElementById("longestChain");

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
  if (locked) return; // don't regenerate if locked after win
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
      if (locked) return;
      cell.classList.toggle("crossed");
      checkWin();
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
function checkWin() {
  let win = false;

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
    return max === SIZE;
  }

  // Rows
  for (let r = 0; r < SIZE; r++) {
    const row = [];
    for (let c = 0; c < SIZE; c++) row.push(r * SIZE + c);
    if (checkLine(row)) win = true;
  }

  // Cols
  for (let c = 0; c < SIZE; c++) {
    const col = [];
    for (let r = 0; r < SIZE; r++) col.push(r * SIZE + c);
    if (checkLine(col)) win = true;
  }

  // Main diagonal
  const diag1 = [];
  for (let i = 0; i < SIZE; i++) diag1.push(i * SIZE + i);
  if (checkLine(diag1)) win = true;

  // Anti-diagonal
  const diag2 = [];
  for (let i = 0; i < SIZE; i++) diag2.push(i * SIZE + (SIZE - 1 - i));
  if (checkLine(diag2)) win = true;

  if (win) {
    alert("BINGO! You win 🎉");
    locked = true;
  }
}

// =========================
// Submit form with screenshot (EmailJS)
// =========================
async function submitForm() {
  if (submitBtn.disabled) return;

  const screenshot = await html2canvas(document.body);
  const dataUrl = screenshot.toDataURL("image/png");

  const templateParams = {
    name: nameInput.value,
    province: provinceInput.value,
    screenshot: dataUrl
  };

  emailjs.send("service_8axigmf", "template_1x9nkvb", templateParams)
    .then(() => {
      alert("Submission sent successfully!");
    }, (error) => {
      console.error("FAILED...", error);
      alert("Error sending submission. Check console.");
    });
}

// =========================
// Event listeners
// =========================
generateBtn.addEventListener("click", generateCard);
resetBtn.addEventListener("click", resetBoard);
submitBtn.addEventListener("click", submitForm);

// Disable submit until inputs filled
[nameInput, provinceInput].forEach(input => {
  input.addEventListener("input", () => {
    submitBtn.disabled = !(nameInput.value.trim() && provinceInput.value.trim());
  });
});

// =========================
// Initial board load
// =========================
generateCard();