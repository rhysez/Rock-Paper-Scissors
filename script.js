
function game(){
    playRound("rock", getComputerChoice());
}

// Calling this function randomly returns either "rock" "paper" or "scissors" from the computer //
function getComputerChoice(){
    const pick = ["rock", "paper", "scissors"]
    return pick[Math.floor(Math.random() * pick.length)]
}  

// Starts a round //
function playRound(playerSelection, computerSelection){ 
    if (playerSelection === computerSelection) {
        return "It's a tie, try again!"
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock") {
            return "You win!"
        } else if (playerSelection === "scissors" && computerSelection === "rock" ||
                    playerSelection === "paper" && computerSelection === "scissors" ||
                    playerSelection === "rock" && computerSelection === "paper") {
                        return "Computer wins!"
                    } 
}

const playerSelection = prompt("Rock, paper or scissors?")
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))

game();





