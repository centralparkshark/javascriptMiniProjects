

function getComputerChoice() {
    let ranNum = Math.floor(Math.random() * 3);
    let choices = ["rock", "paper", "scissors"]
    return choices[ranNum]
}

function getPlayerChoice() {
    return prompt("Enter rock, paper, or scissors");
}

function playerWins() {
    console.log(`${playerChoice} beats ${computerChoice}. Player wins!`)
}

function computerWins() {
    console.log(`${computerChoice} beats ${playerChoice}. Computer wins!`)
}

function playGame() {
    getComputerChoice()
    getPlayerChoice()

    if (playerChoice === computerChoice) {
        console.log("It's a tie!")
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        playerWins()
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        playerWins()
    } else if (playerChoice === "scissors" && computerChoice === "paper")  {
        playerWins()
    } else {
        computerWins()
    }
}

playGame()