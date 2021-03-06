let playerScore = 0
let computerScore = 0
let tieScore = 0
const options = [ "paper" , "rock" , "scissors"];

// DOM elements
const displayWinner = document.querySelector('.displayWinner');
const selectionDisplay = document.createElement('div');
const result = document.createElement('div');
const playerPoints = document.createElement('div');
const computerPoints = document.createElement('div')
const winner = document.querySelector('.winner');
const winnerMsg = document.createElement('div')

//Functions

const selectionButtons = document.querySelectorAll('.selection');
selectionButtons.forEach((selectionButton) => {
    selectionButton.addEventListener('click', e => {
        const playerSelection = selectionButton.id
        playRound(playerSelection)
    });
});


function computerPlay() {
    let random = Math.floor((Math.random() * options.length));
    let computerSelection = options[random];
    return computerSelection;
}

function displayWinnerMsg(playerScore, computerScore) {
    if (playerScore >= 5 || computerScore >= 5){    
        if (playerScore >= 5) {
            winnerMsg.textContent = `You win!`;
        } else if (computerScore >= 5) {
            winnerMsg.textContent = `Allie wins!`;
        }
        winnerMsg.classList.add('winnerMsg');
        winner.appendChild(winnerMsg);
}
}

function reset(){
    location.reload();
  }



function playRound(playerSelection) {
    computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
            result.textContent = "It's a tie!";
            ++tieScore;
    }

    if (
        (playerSelection === "paper" && computerSelection === "rock" ) ||
        (playerSelection === "scissors" && computerSelection === "paper") || 
        (playerSelection === "rock" && computerSelection === "scissors")  
        ) { 
            result.textContent = "You win this round!";
            ++playerScore;    
     }
    if (
        (playerSelection === "paper" && computerSelection === "scissors") || 
        (playerSelection === "rock" && computerSelection === "paper") || 
        (playerSelection === "scissors" && computerSelection === "rock")
        ) { 
            result.textContent = 'Allie wins this round!';
            ++computerScore;
    }
    

    // Scoreboard DOM manipulation
    selectionDisplay.classList.add('selectionDisplay');
    selectionDisplay.textContent = `Player chose: ${playerSelection}  |||  Allie chose: ${computerSelection}`;
    result.classList.add('result');
    displayWinner.appendChild(result)
    displayWinner.appendChild(selectionDisplay);
    document.getElementById('playerScore').textContent= `Player score: ${playerScore}`;
    document.getElementById('computerScore').textContent= `Allie score: ${computerScore}`;
    
    displayWinnerMsg(playerScore, computerScore)
    }


