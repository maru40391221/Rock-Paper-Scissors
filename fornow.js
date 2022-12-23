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

let theNumberOfWin = 0; 
let theNumberOfLose= 0;

function player (){
    playerChoice = prompt("Rock, Paper, Scissors,,,Shoot!", "Type Rock, Paper, or Scissors").toLowerCase();
    console.log (playerChoice);

if (computerSelection == "paper" && playerChoice == "scissors") {
    alert ("You win!! Scissors beat paper.");
    theNumberOfWin++;

} else if (computerSelection == "scissors" && playerChoice == "rock"){
    alert ("You win!! Rock beat scissors.");
    theNumberOfWin++;

} else if (computerSelection == "rock" && playerChoice == "paper"){
    alert ("You win!! Paper beat rock.");
    theNumberOfWin++;

} else if (computerSelection == "scissors" && playerChoice == "paper"){
    alert ("....... Paper can't beat scissors.");
    theNumberOfLose++;

} else if (computerSelection == "paper" && playerChoice == "rock"){
    alert ("....... Rock can't beat paper.");
    theNumberOfLose++;

} else if (computerSelection == "rock" && playerChoice == "scissors"){
    alert ("....... Scissors can't beat rock.");
    theNumberOfLose++;
}
else {
    alert ("Draw. Try again!!");
}
}

function round (){
    computer ();
    player();
}

function game (){
    for (let i = 0; i <= 5; i++) {
        if (i===0){
            console.log ("round 1" );
            round();
            console.log (`Your score ${theNumberOfWin}`);
            console.log (`Computer's score ${theNumberOfLose}`);
        } else if (i===1){
            console.log ("round 2");
            round();
            console.log (`Your score ${theNumberOfWin}`);
            console.log (`Computer's score ${theNumberOfLose}`);
        } else if (i===2){
            console.log ("round 3");
            round();
            console.log (`Your score ${theNumberOfWin}`);
            console.log (`Computer's score ${theNumberOfLose}`);
        } else if (i===3){
            console.log ("round 4");
            round();
            console.log (`Your score ${theNumberOfWin}`);
            console.log (`Computer's score ${theNumberOfLose}`);
        }else if (i===4){
            console.log ("round 5");
            round();
            console.log (`Your score ${theNumberOfWin}`);
            console.log (`Computer's score ${theNumberOfLose}`);
        }else if (i===5){
            console.log ("done")
        }
     }
}

game ();

function whoIsTheWinner (){
    if (theNumberOfWin > theNumberOfLose){
        console.log("You Won!!!");
    } else if (theNumberOfWin < theNumberOfLose) {
        console.log("Don't worry about it");
    } else {
        console.log ("try again");
    }
}

whoIsTheWinner ();