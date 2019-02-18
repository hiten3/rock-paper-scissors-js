
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
        // return `You both have ${playerSelection}. It's a Draw.`
        return 'DRAW'
    }
    // Player Win
    else if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS')
        || (playerSelection === 'PAPER' && computerSelection === 'ROCK')
        || (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) {
        //return `You Win! ${playerSelection} beats ${computerSelection}.`
        return 'WIN'
    }
    // Player Lose
    else {
        // return `You lose ${computerSelection} beats ${playerSelection}.`
        return 'LOSE'
    }
}

let playerWins = 0;
let computerWins = 0;

function game() {

    const promptPlayer = () => prompt("Rock, Paper or Scissors?", `${computerPlay()}`);
    const playerSelection = promptUser();
    const computerSelection = computerPlay();

    function roundCount(roundResult) {
        console.log(`playerSelection is ${playerSelection}`);

        switch (roundResult) {
            case 'WIN':
                playerWins++;
                console.log(`You win this round! ${playerSelection} beats ${computerSelection}.`);
                break;
            case 'LOSE':
                computerWins++;
                console.log(`You lose this round! ${playerSelection} beats ${computerSelection}.`);
                break;

            case 'DRAW':
                console.log(`You both have ${playerSelection}. It's a Draw.`);
                break;
            default:
                break;
        }
    }

    function gameCount() {
        roundCount(playRound(promptUser(), computerSelection));
        console.log(`Player Win: ${playerWins} Lose: ${computerWins}`);
    }

    gameCount();
    gameCount();
    gameCount();
    gameCount();
    gameCount();
}

game();