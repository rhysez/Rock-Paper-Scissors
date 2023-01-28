//All available choices for game //
const choices = ["rock", "paper", "scissors"] 


function game(){
    console.log("Make your choice");
    playRound();
}

// Starts a round //
function playRound(playerSelection, computerSelection){ 
    
}

// Calling this function randomly returns either "rock" "raper" or "Scissors" from the computer //
function getComputerChoice(){
    let compChoice = choices[Math.floor(Math.random() * choices.length)]
    return "The computer chose: " + compChoice; 
}   

function getPlayerChoice(){
   
}


game();





