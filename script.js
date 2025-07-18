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



function playRound(humanChoice, computerChoice){
    if (humanChoice === "ROCK" && computerChoice == "ROCK" ){
            console.log("Both Rock, It's a tie!");
            console.log("Your Score: " + humanScore);
            console.log("Computer Score " + computerScore);
    } else if (humanChoice === "PAPER" && computerChoice == "ROCK" ){
            humanScore++ 
            console.log("Paper beats Rock! You win!");
            console.log("Your Score: " + humanScore);
            console.log("Computer Score: " + computerScore);
    } else if (humanChoice === "SCISSORS" && computerChoice == "ROCK"){
            computerScore++
            console.log("Rock Beats Scissors, You lose!");
            console.log("Your Score: " + humanScore);
            console.log("Computer Score: " + computerScore);
    } else if (humanChoice === "ROCK" && computerChoice == "PAPER"){
            computerScore++
            console.log("Paper Beats Rock, You lose!");
            console.log("Your Score: " + humanScore);
            console.log("Computer Score: " + computerScore);
    } else if (humanChoice === "PAPER" && computerChoice == "PAPER"){
            console.log("Both Paper, It's a tie!");
            console.log("Your Score: " + humanScore);
            console.log("Computer Score " + computerScore);
    } else if (humanChoice === "SCISSORS" && computerChoice == "PAPER"){
            humanScore++ 
            console.log("Scissors beats Paper! You win!");
            console.log("Your Score: " + humanScore);
            console.log("Computer Score: " + computerScore);
    } else if (humanChoice === "ROCK" && computerChoice == "SCISSORS"){
            humanScore++ 
            console.log("Rock beats Scissors! You win!");
            console.log("Your Score: " + humanScore);
            console.log("Computer Score: " + computerScore);
    } else if (humanChoice === "PAPER" && computerChoice == "SCISSORS"){
            computerScore++
            console.log("Scissors beats Paper, You lose!");
            console.log("Your Score: " + humanScore);
            console.log("Computer Score: " + computerScore);
    } else if (humanChoice === "SCISSORS" && computerChoice == "SCISSORS"){
            console.log("Both Scissors, It's a tie!");
            console.log("Your Score: " + humanScore);
            console.log("Computer Score " + computerScore)
        } else {
            alert("Error")
        }            
}
