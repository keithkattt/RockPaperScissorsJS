function getComputerChoice(){
    const randomNum = Math.round(Math.random() * 2) + 1;
    let choice = "";
        switch(randomNum){
            case 1:
                choice = "Rock";
                break;
            case 2:
                choice = "Paper";
                break;
            case 3:
                choice = "Scissors";
                break;
        }

    return choice
}
