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
    
function getHumanChoice(gameRound){
    let humanChoice = prompt("[Rock] [Paper] or [Scissors]: ").toUpperCase();
    
    while (humanChoice !== "ROCK" && humanChoice !== "PAPER" && humanChoice !== "SCISSORS"){
        humanChoice = prompt("Not one of of the choices, try again Rock] [Paper] or [Scissors]").toUpperCase();
                }


    return humanChoice    
}
   
function playGame(){ 
    
    let humanScore = 0; 
    let computerScore = 0;
    let gameRound = 0;   
//Every Game Round a new human choice and Computer must be created
    while (humanScore != 5 && computerScore != 5){
        console.log("Round: " + gameRound)
        let humanSelection = getHumanChoice(gameRound);
        let computerSelection = getComputerChoice(gameRound);  
        playRound(humanSelection, computerSelection)
        ++gameRound
    }

    if (humanScore === 5){
        console.log("YOU WIN!!!! ");
        alert("Game Over");
    } else if (computerScore === 5){
        console.log("YOU LOSE!!!");
        alert("Game Over");
    }


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


    

}

playGame();
