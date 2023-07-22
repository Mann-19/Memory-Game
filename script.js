document.addEventListener('DOMContentLoaded', () => {

    const hardModeCards = [
        {
            name: "shinobu",
            img: "./pics/shinobu.jpg"
        },
        {
            name: "shinobu",
            img: "./pics/shinobu.jpg"
        },
        {
            name: "mitsuri",
            img: './pics/mitsuri.jpg'
        },
        {
            name: "mitsuri",
            img: './pics/mitsuri.jpg'
        },
        {
            name: "muichiro",
            img: './pics/muichiro.jpg'
        },
        {
            name: "muichiro",
            img: './pics/muichiro.jpg'
        },
        {
            name: "sanemi",
            img:  "./pics/sanemi.jpg"
        },
        {
            name: "sanemi",
            img:  "./pics/sanemi.jpg"
        },
        {
            name: "tengen",
            img: "./pics/tengen.jpg"
        },
        {
            name: "tengen",
            img: "./pics/tengen.jpg"
        },
        {
            name: "obanai",
            img: "./pics/obanai.jpg"
        },
        {
            name: "obanai",
            img: "./pics/obanai.jpg"
        }
    ]
    
    const cards = [
        {
            name: "tanjiro",
            img: "./pics/tanjiro.jpg"
        },
        {
            name: "tanjiro",
            img: "./pics/tanjiro.jpg"
        },
        {
            name: "zenitsu",
            img: "./pics/zenitsu.jpg"
        },
        {
            name: "zenitsu",
            img: "./pics/zenitsu.jpg"
        },
        {
            name: "inosuke",
            img: "./pics/inosuke.jpg"
        },
        {
            name: "inosuke",
            img: "./pics/inosuke.jpg"
        },
        {
            name: "gyomei",
            img: "./pics/gyomei.jpg"
        },
        {
            name: "gyomei",
            img: "./pics/gyomei.jpg"
        },
        {
            name: "giyu",
            img: "./pics/giyu.jpg"
        },
        {
            name: "giyu",
            img: "./pics/giyu.jpg"
        },
        {
            name: "rengoku",
            img: "./pics/rengoku.jpg"
        },
        {
            name: "rengoku",
            img: "./pics/rengoku.jpg"
        }
    ];
    hardModeCards.push(...cards);

    cards.sort(() => 0.5 - Math.random());
    hardModeCards.sort(() => 0.5 - Math.random());

    const gameDisplay = document.getElementById('game-display');
    const resultDisplay = document.querySelector('#resultDisplay');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    function clearElement(parentElement) {
        while (parentElement.firstChild) {
          parentElement.removeChild(parentElement.firstChild);
        }
    }

    // EASY MODE LOGIC
    const easyModeBtn = document.querySelector('#easy');
    function createGameBoard() {
        clearElement(gameDisplay);
        for (let i = 0; i < cards.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', './pics/cover.png');
            card.setAttribute('data-id', i);
            card.classList.add('imageSize');
            card.addEventListener('click', flipCard);
            gameDisplay.appendChild(card);
        }
        hardModeDisplay.style.display = "none";
        gameDisplay.style.display = 'grid';
    }
    easyModeBtn.addEventListener('click', () => {
        createGameBoard();
    })

    function flipCard() {
        let cardID = this.getAttribute('data-id');
        cardsChosen.push(cards[cardID].name);
        cardsChosenId.push(cardID);
        this.setAttribute('src', cards[cardID].img);
        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 600);
        }
    };

    function checkForMatch() {
        let allCards = document.querySelectorAll('img');
        const firstPick = cardsChosenId[0];
        const secondPick = cardsChosenId[1];
        if(cardsChosen[0] === cardsChosen[1]) {
            alert("You found a match!");
            allCards[firstPick].setAttribute('src', './pics/blank.png');
            allCards[secondPick].setAttribute('src', './pics/blank.png');
            cardsWon.push(cardsChosen);
        } else {
            allCards[firstPick].setAttribute('src', './pics/cover.png');
            allCards[secondPick].setAttribute('src', './pics/cover.png');
            alert("Sorry try again!");
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cards.length/2) {
            resultDisplay.textContent = 'You won the game';
        }
    }

    // HARD MODE LOGIC
    const hardModeBtn = document.querySelector('#hard');
    const hardModeDisplay = document.getElementById('hardmode-display');
    function createHardGameBoard() {
        clearElement(hardModeDisplay)
        for(let i = 0; i < hardModeCards.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', './pics/cover.png');
            card.setAttribute('data-id', i);
            card.classList.add('imageSize');
            card.addEventListener('click', hardModeFlipCard);
            hardModeDisplay.appendChild(card);
        }
        gameDisplay.style.display = 'none';
        hardModeDisplay.style.display = 'grid';
    }
    hardModeBtn.addEventListener('click', () => {
        createHardGameBoard();
    })

    function hardModeFlipCard() {
        let cardID = this.getAttribute('data-id');
        cardsChosen.push(hardModeCards[cardID].name);
        cardsChosenId.push(cardID);
        this.setAttribute('src', hardModeCards[cardID].img);
        if(cardsChosen.length === 2) {
            setTimeout(hardModeCheckForMatch, 600);
        }
    };

    function hardModeCheckForMatch() {
        let allCards = document.querySelectorAll('img');
        const firstPick = cardsChosenId[0];
        const secondPick = cardsChosenId[1];
        if(cardsChosen[0] === cardsChosen[1]) {
            alert("You found a match!");
            allCards[firstPick].setAttribute('src', './pics/blank.png');
            allCards[secondPick].setAttribute('src', './pics/blank.png');
            cardsWon.push(cardsChosen);
        } else {
            allCards[firstPick].setAttribute('src', './pics/cover.png');
            allCards[secondPick].setAttribute('src', './pics/cover.png');
            alert("Sorry try again!");
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === hardModeCards.length/2) {
            resultDisplay.textContent = 'You won the game';
        }
    }
});
