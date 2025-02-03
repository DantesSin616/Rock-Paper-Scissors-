function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3); 
    return choices[randomNumber];
}

function getHumanChoice() {
    prompt("Rock, paper or Scissors? ")
}

function ComputerScore() {
    let computerScore = 0;
    // If statement.
}


console.log(getComputerChoice());