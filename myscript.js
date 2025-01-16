function getComputerChoice(){
    const randomNum = Math.round(Math.random() * 2) + 1;
    let computerChoice = "";
        switch(randomNum){
            case 1:
                computerChoice = "Rock";
                break;
            case 2:
                computerChoice = "Paper";
                break;
            case 3:
                computerChoice = "Scissors";
                break;
        }

    return computerChoice
}

function getHumanChoice(){
    let humanChoice = prompt("[Rock] [Paper] or [Scissors]: ").toUpperCase();
    
    while (humanChoice !== "ROCK" && humanChoice !== "PAPER" && humanChoice !== "SCISSORS"){
        humanChoice = prompt("None of the choices picked try again Rock] [Paper] or [Scissors]").toUpperCase();
    }


    return humanChoice    
}
