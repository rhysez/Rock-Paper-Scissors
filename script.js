//Calls the playRound function
function game(){
    playRound()
}

// Calling this function randomly returns either "rock" "paper" or "scissors" from the computer 
function getComputerChoice(){
    const pick = ["rock", "paper", "scissors"]
    return pick[Math.floor(Math.random() * pick.length)]
}  

// Starts a round and decides a win, loss or tie
function playRound(playerSelection, computerSelection){ 
    if (playerSelection === computerSelection) {
        return "It's a tie, try again!"
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors" ||
        playerSelection.toLowerCase() === "scissors" && computerSelection === "paper" ||
        playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
            playerScore++;
            return `You win! Your score is ${playerScore}!`
        } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock" ||
                    playerSelection.toLowerCase() === "paper" && computerSelection === "scissors" ||
                    playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
                        computerScore++;
                        return `Computer wins! Computer score is ${computerScore}`
                    } 
}

//Variables for player choice and computer choice
let playerScore = parseInt(0);
let computerScore = parseInt(0);
const playerSelection = prompt("Rock, paper or scissors?");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))

game();





