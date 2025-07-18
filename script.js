function getComputerChoice(gameRound){
    
    const randomNum = Math.round(Math.random() * 2) + 1;
        let computerChoice = "";
            switch(randomNum){
                case 1:
                    computerChoice = "ROCK";
                    break;
                case 2:
                    computerChoice = "PAPER";
                    break;
                case 3:
                    computerChoice = "SCISSORS";
                    break;
        }
   
    return computerChoice
}

function playGame(){ 

    if (humanScore > computerScore){
        console.log("YOU WIN!!!!");
        alert("Game Over");
    } else if (humanScore === computerScore){
        console.log("It's a Tie");
        alert("Game Over");
    } else {
        console.log("You Lose!!!");
        alert("Game Over");
    }
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

let humanScore = 0; 
let computerScore = 0;
let gameRound = 1;   

rockButton.addEventListener("click", () => {
    let humanSelection = "ROCK";
    let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection); // Call playRound with the choices
            console.log("Round: " + gameRound)
            ++gameRound
});

paperButton.addEventListener("click", () => {
    let humanSelection = "PAPER";
    let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection); // Call playRound with the choices
            console.log("Round: " + gameRound)
            ++gameRound
});

scissorsButton.addEventListener("click", () => {
    let humanSelection = "SCISSORS";
    let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
            console.log("Round: " + gameRound)
            ++gameRound
});

function updateScore() {
    const playerSpan = document.getElementById("playerScore")
    const computerSpan = document.getElementById("computerScore")

    playerSpan.textContent = humanScore
    computerSpan.textContent = computerScore
}

function playRound(humanChoice, computerChoice){
    const announce = document.getElementById("announcement")


    if (humanChoice === "ROCK" && computerChoice == "ROCK" ){
            announce.textContent = "Both Rock, It's a tie!"
    } else if (humanChoice === "PAPER" && computerChoice == "ROCK" ){
            announce.textContent = "Paper beats Rock! You win!"
            humanScore++ 
            updateScore()
    } else if (humanChoice === "SCISSORS" && computerChoice == "ROCK"){
            announce.textContent= "Rock Beats Scissors, You lose!"
            computerScore++
            updateScore()
    } else if (humanChoice === "ROCK" && computerChoice == "PAPER"){
            announce.textContent = "Paper Beats Rock, You lose!"
            computerScore++
            updateScore()
    } else if (humanChoice === "PAPER" && computerChoice == "PAPER"){
            announce.textContent = "Both Paper, It's a tie!"
    } else if (humanChoice === "SCISSORS" && computerChoice == "PAPER"){
            humanScore++ 
            updateScore()   
            announce.textContent = "Scissors beats Paper! You win"
    } else if (humanChoice === "ROCK" && computerChoice == "SCISSORS"){
            humanScore++ 
            updateScore()
            announce.textContent = "Rock beats Scissors! You win!"
    } else if (humanChoice === "PAPER" && computerChoice == "SCISSORS"){
            computerScore++
            updateScore()
            announce.textContent = "Scissors beats Paper, You lose!"
    } else if (humanChoice === "SCISSORS" && computerChoice == "SCISSORS"){
            announce.textContent = "Both Scissors, It's a tie!"
        } else {
            alert("Error")
        }            
}
