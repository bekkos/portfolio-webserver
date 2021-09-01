// globals
let userScore = 0;
let opponentScore = 0;
let opponentPick;
let userPick;
let result;

/*
0 = Rock
1 = Paper
2 = Scissors
*/

setTimeout(() => {
    initiateGame();
}, 2000);


const initiateGame = () => {
    let textContainer = document.getElementById("textContainer");
    textContainer.style.display = "none";
    let gameContainer = document.getElementById("gameContainer");
    gameContainer.style.display = "flex";
    resetGame();
    runRound();
}

const resetGame = () => {
    userScore = 0;
    opponentScore = 0;
    updateScoreboard(userScore, opponentScore);
    opponentPick = null;
    userPick = null;
    result = null;
}

const resetRound = () => {
    opponentPick = null;
    userPick = null;
    result = null;

    let userSide = document.getElementById("userSide");
    let opponentSide = document.getElementById("opponentSide");
    
    userSide.removeChild(userSide.firstChild);
    opponentSide.removeChild(opponentSide.firstChild);
}

const updateScoreboard = (userCurrentScore, opponentCurrentScore) => {
    let uScore = document.getElementById("userScore");
    let oScore = document.getElementById("opponentScore");

    uScore.innerText = "YOUR SCORE: " + userCurrentScore;
    oScore.innerText = "OPPONENT SCORE: " + opponentCurrentScore; 
}

const updateUserPick = (pickId) => {
    userPick = pickId;
}

const comparePicks = () => {
    // Check for draw
    if(userPick == 0 && opponentPick == 0 || userPick == 1 && opponentPick == 1 || userPick == 2 && opponentPick == 2) {
        result = 0;
        return;
    }

    // Check for opponent win
    if(userPick == 0 && opponentPick == 1 || userPick == 1 && opponentPick == 2 || userPick == 2 && opponentPick == 0) {
        result = 1;
        return;
    } else {
        // If its not a draw and opponent didn't win, then user wins.
        result = 2;
        return;
    }
}

const drawPicks = () => {
    let userPickDisplay = document.createElement("img");
    let opponentPickDisplay = document.createElement("img");
    userPickDisplay.src = "./images/"+userPick+".png";
    opponentPickDisplay.src = "./images/"+opponentPick+".png";

    let userSide = document.getElementById("userSide");
    let opponentSide = document.getElementById("opponentSide");

    userSide.innerText = "";
    opponentSide.innerText = "";

    userSide.appendChild(userPickDisplay);
    opponentSide.appendChild(opponentPickDisplay);
}

// Main gameloop.
const runRound = () => {
    resetRound();
    
    let userSide = document.getElementById("userSide");
    let opponentSide = document.getElementById("opponentSide");
    
    updateScoreboard(userScore, opponentScore);
    userSide.innerText = "Make your pick.";
    opponentSide.innerText = "Opponent is picking.";

    let randomTime = Math.floor(Math.random() * 3000);
    if(randomTime < 1000) {
        randomTome = 1000;
    }
    
    setTimeout(() => {
        opponentPick = Math.floor(Math.random() * 3);
        opponentSide.innerText = "Opponent has picked.";
    },randomTime);

    // Wait for input
    let checkForUserInput = setInterval(() => {
        if(userPick != null && opponentPick != null) {
            drawPicks();
            comparePicks();
            let resultDisplay = document.getElementById("resultDisplay");
            if(result == 0) {
                resultDisplay.innerText = "ITS A DRAW!";
            }
            if(result == 1) {
                resultDisplay.innerText = "OPPONENT WINS!";
                opponentScore++;
            }
            if(result == 2) {
                resultDisplay.innerText = "YOU WIN!";
                userScore++;  
            }

            setTimeout(()=> {
                runRound();
            },1000);
            clearInterval(checkForUserInput);
        }
    },100);
}
