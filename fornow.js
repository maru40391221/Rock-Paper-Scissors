
function round (){
    let numbers= Math.random() * 10;

    console.log (numbers);

    function computerResult (){ 
    if (4 > numbers && numbers > 0){
        result = "paper";

    } else if (7 > numbers && numbers > 4){
        result = "scissors";

    } else {
        result = "rock";
    }
    
    return result;
    }

    console.log (`computer chose ${computerResult()}`);

    let computerSelection = computerResult ();

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
    
}

function game (){
    for (let i = 0; i <= 5; i++) {
        if (i===0){
            console.log ("round 1" );
            round();
        } else if (i===1){
            console.log ("round 2");
            round();
        } else if (i===2){
            console.log ("round 3");
            round();
        } else if (i===3){
            console.log ("round 4");
            round();
        }else if (i===4){
            console.log ("round 5");
            round();
        }else if (i===5){
            console.log ("done")
        }
     }
}

game ();

/* add a functionality to keep score tomorrow*/