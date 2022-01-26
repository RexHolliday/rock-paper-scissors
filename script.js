let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const choices = ['rock', 'paper', 'scissors']

function generateComputerChoice() {
  if (computerScore < 5 && playerScore < 5) {
  const randomNumber = choices[Math.floor(Math.random() * choices.length)]
    computerChoice = randomNumber
    return computerChoice;
}
}

function playerSelection() {
  if (playerScore < 5 && computerScore < 5) {
  rock_div.addEventListener('click', function() {
  game("rock");
})

paper_div.addEventListener('click', function() {
  game("paper");
})

scissors_div.addEventListener('click', function() {
  game("scissors");
})
}
}

function win(playerSelection, computerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    if (playerScore === 5) {
    endGame();
  }
    if (playerScore < 5) {
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = playerSelection + " defeats " + computerChoice + ". You win! 🔥";
}
}


function lose(playerSelection, computerChoice) {
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    if (computerScore === 5) {
      endGame();
  }
    if (computerScore < 5) {
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = playerSelection + " loses to " + computerChoice + ". You lose... 💩";
}
}


function tie (playerSelection, computerChoice) {
result_div.innerHTML = playerSelection + " ties with " + computerChoice + ". It's a draw!";
}

function game(playerSelection) {
 const computerChoice = generateComputerChoice();
 switch (playerSelection + computerChoice) {
  case 'rockpaper':
  case 'paperscissors':
  case 'scissorsrock':
    lose(playerSelection, computerChoice);
    break
  case 'rockscissors':
  case 'paperrock':
  case 'scissorspaper':
    win(playerSelection, computerChoice);
    break
  case 'rockrock':
  case 'paperpaper':
  case 'scissorsscissors':
    tie(playerSelection, computerChoice);
    break
}
}

function endGame () {
 if (playerScore > computerScore){
  result_div.innerHTML = "You win the game!";
  setTimeout(location.reload.bind(location), 2000);
  

 }
 if (playerScore < computerScore) {
  result_div.innerHTML = "You lose the game...";
  setTimeout(location.reload.bind(location), 2000);
 }
}


playerSelection ();
