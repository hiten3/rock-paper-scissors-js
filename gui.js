
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

btnGame();

function btnGame() {

  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', playOneRound(button));
  });

  const container = document.querySelector('#container');

  let playerWins = 0;
  let computerWins = 0;

  function playOneRound(button) {
    return (e) => {
      const playerSelection = button.id;
      const computerSelection = computerPlay();
      const roundResult = playRound(playerSelection, computerSelection);
      printText(`playerSelection is ${playerSelection}`);
      printText(`computerSelection is ${computerSelection}`) 
      evaluateRound(playerSelection, computerSelection, roundResult);
    };
  }

  function printText(string) {
    const textContainer = document.createElement('p');
    textContainer.classList.add = "printconsole"
    textContainer.textContent = string
    container.appendChild(textContainer);}

  function evaluateRound(playerSelection, computerSelection, roundResult) {
    

    switch (roundResult) {
      case 'WIN':
        playerWins++;
        // const winTextContainer = document.createElement('p');
        printText(`You win this round! ${playerSelection} beats ${computerSelection}.`);
        // winTextContainer.appendChild(winText);
        // container.appendChild(winTextContainer);
        break;
      case 'LOSE':
        computerWins++;
        // const loseTextContainer = document.createElement('p');
        printText(`You lose this round! ${computerSelection} beats ${playerSelection}.`);
        // loseTextContainer.appendChild(loseText);
        // container.appendChild(loseTextContainer);
        break;

      case 'DRAW':
        // const drawTextContainer = document.createElement('p');
        printText(`You both have ${playerSelection}. It's a Draw.`);
        // drawTextContainer.appendChild(drawText);
        // container.appendChild(drawTextContainer);
        break;
      default:
        break;
    }
    }
  }

  // if (playerWins > computerWins) {
  //   console.log(`Congratulations! You won by ${playerWins - computerWins}.`)
  // }
  // else if (playerWins == 0 && computerWins == 0) {
  //   console.log(`You both drew 5 times, how odd.`)
  // }
  // else {
  //   console.log(`Tough luck, the Computer won by ${computerWins - playerWins}`)
  // }




