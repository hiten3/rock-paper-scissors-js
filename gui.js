
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

const container = document.querySelector('#container');

function printText(string) {
  // remove old message
  const node = container.firstChild;
  if (node) {
  node.parentNode.removeChild(node);
  }
  // add p element with new message
  const textContainer = document.createElement('p');
  textContainer.setAttribute = "#printconsole"
  textContainer.textContent = string
  container.appendChild(textContainer);
}

btnGame();


function btnGame() {

  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', playOneRound(button));
  });


  function playOneRound(button) {
    return (e) => {
      const playerSelection = button.id;
      const computerSelection = computerPlay();
      const roundResult = playRound(playerSelection, computerSelection);
      printText(`playerSelection is ${playerSelection}`);
      printText(`computerSelection is ${computerSelection}`)
      printText(evaluateRound(roundResult));
      updateScore();
      if (playerWins === 5||computerWins === 5) {
        countWins(playerWins, computerWins);
      }
    };
  }

// this function increments the appropriate win variable and returns the appropriate message
  function evaluateRound(roundResult) {
    switch (roundResult) {
      case 'WIN':
        playerWins++;
        return `You win this round!`;

        break;
      case 'LOSE':
        computerWins++;
        return `You lose this round!`;

        break;

      case 'DRAW':
        return `It's a Draw.`;

        break;
      default:
        break;
    }
  }
}



let playerWins = 0;
let computerWins = 0;


function countWins(playerWins, computerWins) {
  if (playerWins > computerWins) {
    printText(`Congratulations! You won by ${playerWins - computerWins}.`);
  }
  else if (playerWins == 0 && computerWins == 0) {
    printText(`You both drew 5 times, how odd.`);
  }
  else {
    printText(`Tough luck, the Computer won by ${computerWins - playerWins}`);
  }
}

function updateScore() {
  playerScore = document.body.querySelector("p > #playerscore");
  compScore = document.body.querySelector("p > #compscore");
  playerScore.textContent = `${playerWins}`;
  compScore.textContent = `${computerWins}`;
}

