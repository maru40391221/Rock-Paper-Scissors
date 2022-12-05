
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
