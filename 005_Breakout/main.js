const grid = document.querySelector('.grid');
const score = window.document.querySelector('#score');
const blockWidth = 100;
const blockHeight = 20;

const userStart = [230, 10];
let userCurrentPosition = userStart;

const ballStart = [270, 40];
let ballCurrentPosition = ballStart;
let xDirection = 2;
let yDirection = 2;
let result = 0

let timerId;

// Create Block
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis];
        this.bottomRight = [xAxis + blockWidth, yAxis];
        this.topLeft = [xAxis, yAxis + blockHeight];
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
    }
}

// All my blocks
const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),

    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),

    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210),

    new Block(10, 180),
    new Block(120, 180),
    new Block(230, 180),
    new Block(340, 180),
    new Block(450, 180),
]


// Draw all my blocks
function addBlocks() {
    for (let i = 0; i < blocks.length; i++) {
        const block = document.createElement("div");
        block.classList.add('block');
        block.style.left = blocks[i].bottomLeft[0] + "px";
        block.style.bottom = blocks[i].bottomLeft[1] + "px";
        grid.appendChild(block);
    }
}

addBlocks()

// Add a user
const user = document.createElement('div');
user.classList.add('user');
drawUser()
grid.appendChild(user)

// Draw the user function
function drawUser() {
    user.style.left = `${userCurrentPosition[0]}px`;
    user.style.bottom = `${userCurrentPosition[1]}px`;
}

//Draw the Ball
function drawBall() {
    ball.style.left = `${ballStart[0]}px`;
    ball.style.bottom = `${ballStart[1]}px`;
}

// Move user commandes
function moveUser(e) {
    switch (e.key) {
        case "ArrowLeft":
            if (userCurrentPosition[0] > 0) {
                userCurrentPosition[0] -= 10;
                drawUser();
            }
            break;
        case "ArrowRight":
            if (userCurrentPosition[0] < 460) {
                userCurrentPosition[0] += 10;
                drawUser();
            }
            break;
    }
}

document.addEventListener('keydown', moveUser);

// Add a ball
const ball = document.createElement('div');
ball.classList.add("ball");
drawBall();
grid.appendChild(ball)

// Ball collisions conditions
function checkCollision() {
    const widthCollision = (ballCurrentPosition[0] > userCurrentPosition[0]) && (ballCurrentPosition[0] < userCurrentPosition[0] + 100)
    const heightCollision = ballCurrentPosition[1] <= userCurrentPosition[1] + 20

    // collision with any block
    for (let i = 0; i < blocks.length; i++) {
        if (ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0] && (ballCurrentPosition[1] + 20) >= blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topLeft[1]) {
            const allBlocks = Array.from(document.querySelectorAll(".block"))
            allBlocks[i].classList.remove("block")
            blocks.splice(i, 1)
            result++
            score.innerHTML = result
            changeDirection()
        }
    }

    // Check for Win
    if (blocks.length === 0) {
        alert("Congratulation, You Win!")
        clearInterval(timerId)
        document.removeEventListener("keydown", moveUser)
    }

    if (widthCollision && heightCollision) {
        changeDirection()
    }

    // collision with grid border
    if (ballCurrentPosition[0] <= 0 || ballCurrentPosition[0] >= 540 || ballCurrentPosition[1] >= 280) {
        changeDirection()
    } else if (ballCurrentPosition[1] <= 0) {
        clearInterval(timerId)
        score.innerHTML = 'You Lose'
        document.removeEventListener("keydown", moveUser)
    }

}

function changeDirection() {
    (xDirection === 2 && yDirection === 2) ?
    yDirection = -2: (xDirection === 2 && yDirection === -2) ?
        xDirection = -2 :
        (xDirection === -2 && yDirection === -2) ?
        yDirection = 2 :
        xDirection = 2
}


// Move the ball
function moveBall() {
    ballCurrentPosition[0] += xDirection;
    ballCurrentPosition[1] += yDirection;

    drawBall()
    checkCollision()
}

timerId = setInterval(moveBall, 30)