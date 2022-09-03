const cardArray = [{
    name: 'fries',
    img: 'images/fries.png',
}, {
    name: 'hotdog',
    img: "images/hotdog.png"
}, {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
}, {
    name: 'milkshake',
    img: "images/milkshake.png"
}, {
    name: 'pizza',
    img: 'images/pizza.png',
}, {
    name: 'sheeseburger',
    img: 'images/cheeseburger.png'
}, {
    name: 'fries',
    img: 'images/fries.png',
}, {
    name: 'hotdog',
    img: "images/hotdog.png"
}, {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
}, {
    name: 'milkshake',
    img: "images/milkshake.png"
}, {
    name: 'pizza',
    img: 'images/pizza.png',
}, {
    name: 'sheeseburger',
    img: 'images/cheeseburger.png'
}]

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDsp = document.getElementById('result');
let cardsChosen = [];
let cardsChosensIds = [];
const cardsWhon = []

function createBoard() {
    cardArray.forEach(item => {
        const card = document.createElement("img");
        card.setAttribute("src", "images/blank.png");
        card.setAttribute("data-id", cardArray.indexOf(item));
        gridDisplay.appendChild(card);
        card.addEventListener("click", flipCard);
    })
}
console.log(cardArray)
createBoard();

function checkMatch() {
    const cards = document.querySelectorAll("img");

    if (cardsChosen[0] === cardsChosen[1]) {
        cards[cardsChosensIds[0]].setAttribute("src", "images/white.png");
        cards[cardsChosensIds[1]].setAttribute('src', "images/white.png");
        cards[cardsChosensIds[0]].removeEventListener("click", flipCard);
        cards[cardsChosensIds[1]].removeEventListener("click", flipCard);
        cardsWhon.push(cardsChosen)
        alert('Found!')
    } else {
        cards[cardsChosensIds[0]].setAttribute("src", "images/blank.png");
        cards[cardsChosensIds[1]].setAttribute('src', "images/blank.png");
        alert('Sory, try again')
    }
    resultDsp.innerHTML = cardsWhon.length;

    cardsChosen = [];
    cardsChosensIds = [];

    if (cardsWhon.length == cardArray.length / 2) {
        resultDsp.innerHTML = "Congratulation you found them all!"
        alert("YOU WHIN!")
    }
}

function flipCard() {
    const cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    this.setAttribute('src', `${cardArray[cardId].img}`);
    cardsChosensIds.push(cardId)

    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}