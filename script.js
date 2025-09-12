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

    let generateCount = 0;
    let gameActive = true;

    const teamInput = document.getElementById("team");
    const provinceInput = document.getElementById("province");
    const submitBtn = document.getElementById("submitBtn");

    function checkInputs() {
      submitBtn.disabled = !(teamInput.value.trim() && provinceInput.value.trim());
    }
    teamInput.addEventListener("input", checkInputs);
    provinceInput.addEventListener("input", checkInputs);

    function shuffle(array) {
      let currentIndex = array.length, randomIndex;
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
      }
      return array;
    }

    function generateBoard() {
      const board = document.getElementById("board");
      board.innerHTML = "";
      gameActive = true;
      let words = shuffle([...wordList]).slice(0, 64);

      for (let i = 0; i < 64; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.innerText = words[i];
        cell.dataset.index = i;
        cell.addEventListener("click", () => markCell(cell));
        board.appendChild(cell);
      }

      generateCount++;
      document.getElementById("count").innerText = generateCount;
    }

    function markCell(cell) {
      if (!gameActive) return;
      cell.classList.toggle("crossed");
      checkWin();
    }

    function checkWin() {
      const cells = document.querySelectorAll(".cell");

      for (let r = 0; r < 8; r++) {
        let rowCrossed = true;
        for (let c = 0; c < 8; c++) {
          if (!cells[r * 8 + c].classList.contains("crossed")) {
            rowCrossed = false;
            break;
          }
        }
        if (rowCrossed) return declareWin();
      }

      for (let c = 0; c < 8; c++) {
        let colCrossed = true;
        for (let r = 0; r < 8; r++) {
          if (!cells[r * 8 + c].classList.contains("crossed")) {
            colCrossed = false;
            break;
          }
        }
        if (colCrossed) return declareWin();
      }
    }

    function declareWin() {
      alert("🎉 BINGO! You Win 🎉");
      gameActive = false;
    }

    function resetGame() {
      document.getElementById("board").innerHTML = "";
      document.getElementById("count").innerText = 0;
      generateCount = 0;
      gameActive = true;
    }

    async function submitForm() {
      if (submitBtn.disabled) return;

      const screenshot = await html2canvas(document.body);
      const dataUrl = screenshot.toDataURL("image/png");

      const templateParams = {
        name: teamInput.value,
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