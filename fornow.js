let numbers= Math.random() * 10;

function getComputerChoice (){

    if (4 > numbers && numbers > 0){
        result = "paper";

    } else if (7 > numbers && numbers > 4){
        result = "scissors";

    } else {
        result = "rock";
    }
    
    return result;

}

console.log (getComputerChoice());
console.log (numbers);


let playerSelection = prompt("Rock, Paper, Scissors,,,Shoot!", "Type Rock, Paper, or Scissors");

let computerSelection = getComputerChoice();

if (computerSelection == "paper" && playerSelection === "Scissors") {
    alert ("You win!! Scissors beat paper.");
} else if (computerSelection == "scissors" && playerSelection === "Rock"){
    alert ("You win!! Rock beat scissors.");
} else if (computerSelection == "rock" && playerSelection === "Paper"){
    alert ("You win!! Paper beat rock.");

} else if (computerSelection == "scissors" && playerSelection === "Paper"){
    alert ("....... Paper can't beat scissors.");
} else if (computerSelection == "paper" && playerSelection === "Rock"){
    alert ("....... Rock can't beat paper.");
} else if (computerSelection == "rock" && playerSelection === "Scissors"){
    alert ("....... Scissors can't beat rock.");
}
 else {
    alert ("Draw. Try again!!");
}


