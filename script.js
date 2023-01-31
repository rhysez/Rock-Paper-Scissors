// Calls the playRound function
function game(){
    playRound()
}

// Randomly returns either "rock" "paper" or "scissors" from the computer 
function getComputerChoice(){
    const pick = ["rock", "paper", "scissors"]
    return pick[Math.floor(Math.random() * pick.length)]
}  

// Starts a round and decides a win, loss or tie
// playerScore++ and computerScore++ will keep tally of scores
function playRound(playerSelection, computerSelection){ 
    if (playerSelection === computerSelection) {
        return "It's a tie, try again!"
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors" ||
        playerSelection.toLowerCase() === "scissors" && computerSelection === "paper" ||
        playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
            playerScore++;
            overallScore++;
            return `You win! Your score is ${playerScore}!`
        } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock" ||
                    playerSelection.toLowerCase() === "paper" && computerSelection === "scissors" ||
                    playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
                        computerScore++;
                        overallScore++;
                        return `Computer wins! Computer score is ${computerScore}`
                    } 
}

// Variables for player choice and computer choice
let playerScore = parseInt(0);
let computerScore = parseInt(0);
let overallScore = playerScore + computerScore;

for (i = 0; i < 5; i++){
    const playerSelection = prompt("Rock, paper or scissors?");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection))
} if (i === 5 && playerScore > computerScore){
    console.log("You have won! Congratulations!")
} else if (i === 5 && playerScore < computerScore){
    console.log("You lose! Better luck next time.")
} else if (i === 5 && playerScore === computerScore){
    console.log("It's a tie! Is a rematch on the horizon?")
}

game();





