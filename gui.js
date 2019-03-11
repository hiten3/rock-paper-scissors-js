
function computerPlay() {
  // create random number from 1 - 3
  let randNum = Math.floor(Math.random() * 3 + 1);

  switch (randNum) {
      case 1:
          return "ROCK"
          break;
      case 2:
          return "PAPER"
          break;
      case 3:
          return "SCISSORS"
          break;
  }
}

function playRound(playerSelection, computerSelection) {
  // remove case sensitivity
  playerSelection = playerSelection.toUpperCase();

  // Player Draw
  if (playerSelection === computerSelection) {
      return 'DRAW'
  }
  // Player Win
  else if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS')
      || (playerSelection === 'PAPER' && computerSelection === 'ROCK')
      || (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) {
      return 'WIN'
  }
  // Player Lose
  else {
      return 'LOSE'
  }
}



function game() {
  
  let playerWins = 0;
  let computerWins = 0;


  const promptPlayer = () => prompt("Rock, Paper or Scissors?", `${computerPlay()}`);

  function evaluateRound(roundResult) {
      console.log(`playerSelection is ${playerSelection}`);

      switch (roundResult) {
          case 'WIN':
              playerWins++;
              console.log(`You win this round! ${playerSelection} beats ${computerSelection}.`);
              break;
          case 'LOSE':
              computerWins++;
              console.log(`You lose this round! ${computerSelection} beats ${playerSelection}.`);
              break;

          case 'DRAW':
              console.log(`You both have ${playerSelection}. It's a Draw.`);
              break;
          default:
              break;
      }
  }

  function gameCount() {
      playerSelection = promptPlayer();
      computerSelection = computerPlay();
      evaluateRound(playRound(playerSelection, computerSelection));
      console.log(`Player Win: ${playerWins} Lose: ${computerWins}`);
  }

  if (playerWins > computerWins) {
      console.log(`Congratulations! You won by ${playerWins-computerWins}.`)
  }
  else if (playerWins == 0 && computerWins == 0) {
      console.log(`You both drew 5 times, how odd.`)
  }
  else {
      console.log(`Tough luck, the Computer won by ${computerWins-playerWins}`)
  }
}

game();