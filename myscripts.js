function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
   return random;
}

function getHumanChoice (){
    let choice = prompt("Rock, Paper, or Scissors?");
    if(choice.toUpperCase() == "ROCK"){
        return 0;
    } else if (choice.toUpperCase() == "PAPER"){
        return 1;
    } else if (choice.toUpperCase() == "SCISSORS"){
        return 2;
    }
    return choice;
}

function score(human,computer){
    if(human == computer){
        return console.log("It's a tie");
    } else if (human==0 && computer==2){
        computerScore++;
        round--;
        return;
    } else if (human==2 && computer==0){
        humanScore++;
        return;
    } else if (human < computer){
        humanScore++;
        return;
    } else if (human < computer) {
        computerScore++;
        return;
    }
}

function compare(human, computer){
    if (human < computer){
        console.log("Computer Wins");
    } else if (human > computer){
        console.log("Human wins");
    } else {
        console.log("It's a tie, nobody wins");
    }
}


let round = 0;
let humanScore = 0;
let computerScore = 0;


while(round < 5){
    let human = getHumanChoice();
    let computer = getComputerChoice();
    console.log(round);
    score(human, computer);
    round++;
}

compare(humanScore,computerScore);