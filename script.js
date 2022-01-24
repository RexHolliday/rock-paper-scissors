let computerScore = 0;
let playerScore = 0;
let playerChoice;
let computerSelection;

function playerSelection() {
    let choice = prompt("Please choose Rock, paper or scissors").toLowerCase();

    if (choice == "rock"){
        return playerChoice = 0; 
    }
    if (choice == "paper"){
        return playerChoice = 1;
    }
    if(choice == "scissors"){
        return playerChoice = 2;
    }
}

function computerPlay() {
  let randomNumber;
  randomNumber = Math.floor(Math.random() * 3);
if (randomNumber == 0) {
      return computerSelection = 0;
  }
   if (randomNumber == 1) {
      return computerSelection = 1;
    }
    if (randomNumber == 2) {
      return computerSelection = 2;
    }
    }


function playRound() {
  if (computerSelection == playerChoice) {
    console.log("Tie!");
  }
  if ((computerSelection == 0 && playerChoice == 2) || (computerSelection == 1 && playerChoice == 0) || (computerSelection == 2 && playerChoice == 1)) {
    console.log("You lose!");
    computerScore++;
  }
  if ((computerSelection == 0 && playerChoice == 1) || (computerSelection == 1 && playerChoice == 2) || (computerSelection == 2 && playerChoice == 0)) {
    console.log("You win!");
    playerScore++;
  }
}

function game() {
  while(computerScore < 5 && playerScore < 5){
    computerPlay();
    playerSelection();
    playRound();
    console.log("Player:" + playerScore);
    console.log("Computer:" + computerScore)
    if(playerScore == 5) {
      console.log("Player wins the game.");
    }
    if(computerScore == 5) {
      console.log("Computer wins the game.");
    }
  }
}

game();

  