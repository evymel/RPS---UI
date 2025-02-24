

function getComputerChoice(){
    let a = Math.random();
    let b = "hold"
    
    if (a < 0.3333){
        b = "paper"
    } else if (0.3334 < a && a < 0.6666) {
        b = "rock"
    } else { b = "scissors"}
    return b;
}

//this function does not take into account the possibility that the human enters entirely incorrect input, it presumes that rock, paper or scissors were entered, tidy them 
function getHumanChoice(){
    let answer = prompt("Please enter the rock/paper/scissors: ");

    answer = answer.toLowerCase();

    if (answer == "rock" || answer == "paper" || answer == "scissors" ){
        return answer;
    }
    else { return prompt("you misspelled, please try again : rock, paper or scissors!"); }
    
}


//doesn't work
//function getHumanChoice(){
//    let answer = prompt("Please enter the rock/paper/scissors: ");
//    answer = checklegal(answer);
//    return answer
//
//}
//
//function checklegal(str){
//    if (str != "rock" || str != "paper" || str != "scissors" ) {
//        console.log("illegal choice, try again : paper, rock or scissors")
//        return getHumanChoice();
//    }
//    else {return str}
//}



function playRound(computer, human) {
    //i could declare the let inside here and not outside globally? up above at the start i mean
    console.log("computer did :" +computer);
    if (computer == human) {
        console.log("draw! you both used :" + computer);
        return;
    } else if ((human == "rock" && computer == "scissors") || (human == "scissors" && computer == "paper") || (human == "paper" && computer == "rock")) {  
        console.log("you win!");
        return humanScore++;
    } else if ((human == "rock" && computer == "paper") || (human == "scissors" && computer == "rock") || (human == "paper" && computer == "scissors")) {
        console.log("you lose!");
        return computerScore++;
    } else {console.log("how did you get here? outside the matrix of possibilies!") ;
        return;
    }
}




let computerScore  = 0
let humanScore = 0

function playGame () {

    for(let i = 0; i < 5; i++){
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        playRound(computerChoice, humanChoice);
    }
    




}

playGame ();
console.log("final score player score:" + humanScore + "computer score:" + computerScore )



