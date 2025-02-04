let ComputerScore = 0;
let HumanScore = 0;   

function getComputerChoice(){ // This function will get the computer choice
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3); 
    return choices[randomNumber];
}

function getHumanChoice() { // This function will get the human choice
    return prompt("rock, paper or scissors?")
}

function logicGame() {  // This function will determine the winner

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    const outcomes = { // an object is created to determine the winner
        rock: { scissors: "You win!", paper: "You lose!" },
        paper: { rock: "You win!", scissors: "You lose!" },
        scissors: { paper: "You win!", rock: "You lose!" }
    };

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else {
        const result = outcomes[humanChoice][computerChoice];
        console.log(result);
        if (result === "You win!") {
            HumanScore++;
        } else {
            ComputerScore++;
        }
    }
}

function playGame() { // this function will play the game 
    for (let i = 0; i < 5; i++) {
        logicGame();
        console.log(`Round ${i + 1}: Computer Score: ${ComputerScore} Human Score: ${HumanScore}`);
    }

    if (HumanScore > ComputerScore) {
        console.log("You win the game!");
    } else if (HumanScore < ComputerScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie game!");
    }
}

playGame(); // this function will start the game