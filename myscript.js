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


