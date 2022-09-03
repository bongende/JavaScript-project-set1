const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll("button")
let userChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);
    randomNumber == 0 ? computerChoiceDisplay.innerHTML = 'Rock' : randomNumber == 1 ? computerChoiceDisplay.innerHTML = 'Paper' : computerChoiceDisplay.innerHTML = "Scissor"
}

function getResult() {
    computerChoiceDisplay.innerHTML === 'Rock' && userChoice === 'Paper' ?
        result = '**You Win!**' :
        computerChoiceDisplay.innerHTML === 'Paper' && userChoice === "Scissor" ?
        result = '**You Win!**' :
        computerChoiceDisplay.innerHTML === 'Scissor' && userChoice === 'Rock' ?
        result = '**You Win!**' :
        computerChoiceDisplay.innerHTML === userChoice ?
        result = "Its a draw!" :
        result = "You Lose!"

    resultDisplay.innerHTML = result;
}