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
    mane: 'milkshake',
    img: "images/milkshake.png"
}, {
    mane: 'pizza',
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
    mane: 'milkshake',
    img: "images/milkshake.png"
}, {
    mane: 'pizza',
    img: 'images/pizza.png',
}, {
    name: 'sheeseburger',
    img: 'images/cheeseburger.png'
}]

cardArray.sort(() => 0.5 - Math.random())



const gridDisplay = document.querySelector("#grid")

function createGrid() {
    gridDisplay.forEach(item, () => {

    })
}


console.log(gridDisplay)