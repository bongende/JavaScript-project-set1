const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.getElementById('time-left');
const score = document.querySelector('#score');

let result = 0;
const randomSquares = () => {
    squares.forEach(square => {
        square.classList.remove("mole");
    })

    let randomPosition = Math.floor(Math.random() * squares.length)
    squares[randomPosition].classList.add('mole');
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {})
})

const moveMole = () => {
    let timerId = null;
    timerId = setInterval(randomSquares, 500)
}


document.addEventListener('DOMContentLoaded', moveMole);