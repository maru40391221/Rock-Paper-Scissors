let computerSelection; 

let playerChoice;

function computer (){
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

    computerSelection = computerResult ();
}

function player (){
    playerChoice = prompt("Rock, Paper, Scissors,,,Shoot!", "Type Rock, Paper, or Scissors").toLowerCase();
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

function round (){
    computer ();
    player();
}

let theNumberOfWin = 0; 
let theNumberOfLose = 0;

function score (){
    for (let z = 0; z <= 5; z++){
        if (z = 0 && (computerSelection == "paper" && playerChoice == "scissors")||
    (computerSelection == "scissors" && playerChoice == "rock") ||
    (computerSelection == "rock" && playerChoice == "paper")
    ) {
        theNumberOfWin++;
        
        return theNumberOfWin;
    }
    if (z = 1 && (computerSelection == "paper" && playerChoice == "scissors")||
    (computerSelection == "scissors" && playerChoice == "rock") ||
    (computerSelection == "rock" && playerChoice == "paper")
    ) {
        theNumberOfWin++;
        
        return theNumberOfWin;
    }
    if (z = 2 && (computerSelection == "paper" && playerChoice == "scissors")||
    (computerSelection == "scissors" && playerChoice == "rock") ||
    (computerSelection == "rock" && playerChoice == "paper")
    ) {
        theNumberOfWin++;
        
        return theNumberOfWin;
    }
    if (z = 3 && (computerSelection == "paper" && playerChoice == "scissors")||
    (computerSelection == "scissors" && playerChoice == "rock") ||
    (computerSelection == "rock" && playerChoice == "paper")
    ) {
        theNumberOfWin++;
        
        return theNumberOfWin;
    }
    if (z = 4 && (computerSelection == "paper" && playerChoice == "scissors")||
    (computerSelection == "scissors" && playerChoice == "rock") ||
    (computerSelection == "rock" && playerChoice == "paper")
    ) {
        theNumberOfWin++;
        
        return theNumberOfWin;
    }
    if (z = 5 && (computerSelection == "paper" && playerChoice == "scissors")||
    (computerSelection == "scissors" && playerChoice == "rock") ||
    (computerSelection == "rock" && playerChoice == "paper")
    ) {
        theNumberOfWin++;
        
        return theNumberOfWin;
    }
}
}

    

function game (){
    for (let i = 0; i <= 5; i++) {
        if (i===0){
            console.log ("round 1" );
            round();
            score();
            console.log (theNumberOfWin);
        } else if (i===1){
            console.log ("round 2");
            round();
            score();
            console.log (theNumberOfWin);
        } else if (i===2){
            console.log ("round 3");
            round();
            score();
            console.log (theNumberOfWin);
        } else if (i===3){
            console.log ("round 4");
            round();
            score();
            console.log (theNumberOfWin);
        }else if (i===4){
            console.log ("round 5");
            round();
            score();
            console.log (theNumberOfWin);
        }else if (i===5){
            console.log ("done")
        }
     }
}

game ();



/* add a functionality to keep score tomorrow*/