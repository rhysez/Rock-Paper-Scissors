//All available choices for game //
const choices = ["rock", "paper", "scissors"] 


function game(){
    playRound();
}

// Calling this function randomly returns either "rock" "paper" or "scissors" from the computer //
function getComputerChoice(){
    let compChoice = choices[Math.floor(Math.random() * choices.length)]
    return "The computer chose: " + compChoice; 
}  

// Starts a round //
function playRound(playerSelection, computerSelection){ 
    playerSelection = "rock";
    computerSelection = getComputerChoice();
    if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock") {
            return "You win!"
        } else if (playerSelection === "scissors" && computerSelection === "rock" ||
                    playerSelection === "paper" && computerSelection === "scissors" ||
                    playerSelection === "rock" && computerSelection === "paper") {
                        return "Computer wins!"
                    } else {
                        return "It's a tie!"
                    }
}

game();





