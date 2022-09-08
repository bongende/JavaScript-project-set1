const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.getElementById('time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

const randomSquares = () => {
    squares.forEach(square => {
        square.classList.remove("mole");
    })

    let randomPosition = Math.floor(Math.random() * squares.length)
    squares[randomPosition].classList.add('mole');

    hitPosition = randomPosition + 1;
    // console.log(hitPosition)
}

squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        if (square.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})

const moveMole = () => {
    timerId = setInterval(randomSquares, 500)

}

let countDown = () => {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime <= 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId)
        window.alert("GAME OVER! Your final score is: " + result);
    }
}

let countDownTimerId = setInterval(countDown, 1000)

document.addEventListener('DOMContentLoaded', moveMole);