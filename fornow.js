

function getComputerChoice (){
    let numbers= Math.random() * 10;

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
let computerSelection = getComputerChoice();

let playerChoice = prompt("Rock, Paper, Scissors,,,Shoot!", "Type Rock, Paper, or Scissors").toLowerCase();

console.log (playerChoice);

if (computerSelection == "paper" && playerChoice == "scissors") {
    alert ("You win!! Scissors beat paper.");

} else if (computerSelection == "scissors" && playerChoice == "rock"){
    alert ("You win!! Rock beat scissors.");

} else if (computerSelection == "rock" && playerChoice == "paper"){
    alert ("You win!! Paper beat rock.");

} else if (computerSelection == "scissors" && playerChoice == "paper"){
    alert ("....... Paper can't beat scissors.");

} else if (computerSelection == "paper" && playerChoice == "rock"){
    alert ("....... Rock can't beat paper.");

} else if (computerSelection == "rock" && playerChoice == "scissors"){
    alert ("....... Scissors can't beat rock.");
}
 else {
    alert ("Draw. Try again!!");
}

