
let cScore  = 0;
let pScore = 0;
let round = 0 ;
let InnerLog ='';



const roundPanel = document.querySelector('#roundPanel');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');


let rock = document.getElementById('rockButton');
let paper = document.getElementById('paperButton');
let scissors = document.getElementById('scissorsButton');




//simple, works perfectly as far as i can tell
function getComputerChoice(){
    let a = Math.random();
    if (a <= (1/3)){
        return "paper";
    } else if (a <= (2/3)) {
        return "rock";
    } else { return "scissors" }
    
}

//i could declare the let inside here and not outside globally? up above at the start i mean
//works as far as i can tell the "human" needs to get the correct one
function playRound(computer, human) {
    round++;

    	roundPanel.innerText = `== Round ${round} == \n
							Player Chose: ${human}\n
							Computer Chose: ${computer}`; 

    if (computer == human) {
        roundPanel.innerText += "\n\nRound DRAW, no points award";
		
        computerScore.innerText = `computer score ==  ${cScore} == \n`;
        playerScore.innerText = `Player score ==  ${pScore} == \n`;
        return;
        //add half to each for draw, add one for winner, add zero for loser,


    } else if ((human == "rock" && computer == "scissors") || (human == "scissors" && computer == "paper") || (human == "paper" && computer == "rock")) {  
        pScore++;
        roundPanel.innerText += "\n\nPlayer wins, one point awarded for Player";
        playerScore.innerText = `Player score ==  ${pScore} == \n`;
        checkWinner();
        return pScore;

    } else if ((human == "rock" && computer == "paper") || (human == "scissors" && computer == "rock") || (human == "paper" && computer == "scissors")) {
        cScore++;
        roundPanel.innerText += "\n\nComputer wins, one point awarded for computer";
        computerScore.innerText = `computer score ==  ${cScore} == \n`;
        checkWinner();
        return cScore;



    } else {console.log("how did you get here? outside the matrix of possibilies!") ;
        return;
    }


    
}


// essentially this part is what the user does to choose instead of the function blah

//InnerLog += 'player used rock!' ;
//resultScore.innerHTML = InnerLog


rockButton.addEventListener('click', (event) => {


    playRound(getComputerChoice(), 'rock')


});

paperButton.addEventListener('click', (event) => {


    playRound(getComputerChoice(), 'paper')

});

scissorsButton.addEventListener('click', (event) => {

    playRound(getComputerChoice(), 'scissors')
});

// function result (divSelector, value) {
//     document.querySelector(divSelector).innerHTML += value;
// }



function playGame () {

    while ( ( computerScoreScore <= 5 ) || ( humanScore <= 5 )){
        playRound(computerChoice, humanChoice);
    }
        
    
    
}

function checkWinner() {
	if(cScore == 5) {
		roundPanel.innerText = "Computer WON the game!";
		playerScore.innerText = "Player Score";
		computerScore.innerText = "Computer Score";
		pScore = 0;
		cScore = 0;
		round = 0;
	} else if(pScore == 5) {
		roundPanel.innerText = "Player WON the game!";
		playerScore.innerText = "Player Score";
		computerScore.innerText = "Computer Score";
		pScore = 0;
		cScore = 0;
		round = 0;
	}
}













