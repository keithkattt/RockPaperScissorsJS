function getComputerChoice(){
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

function getHumanChoice(){
    let humanChoice = prompt("[Rock] [Paper] or [Scissors]: ").toUpperCase();
    
    while (humanChoice !== "ROCK" && humanChoice !== "PAPER" && humanChoice !== "SCISSORS"){
        humanChoice = prompt("Not one of of the choices, try again Rock] [Paper] or [Scissors]").toUpperCase();
    }


    return humanChoice    
}
