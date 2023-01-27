//All available choices for game
const choices = ["rock", "paper", "scissors"] 

function game(){
    playRound();    
}

// Calling this function randomly returns either "rock" "raper" or "rcissors" from the computer
function getComputerChoice(){
    let compChoice = choices[Math.floor(Math.random() * choices.length)]
    return "The computer chose: " + compChoice; 
}   

// Gets input from the player
function getPlayerChoice(){
    let input = prompt("Enter rock, paper or scissors!")
    input = input.toLowerCase;
    input = input.toUpperCase; //Makes the input case insensitive
}   

// Starts a round
function playRound(){
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
}






