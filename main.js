
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


    let playerSelection = prompt("Rock, Paper or Scissors?", `${computerPlay()}`)
    const computerSelection = computerPlay();

    function roundCount(roundResult) {
        switch (roundResult) {
            case 'WIN':
                playerWins++;
                console.log(`You win this round! ${playerSelection} beats ${computerSelection}.`);
                break;
            case 'LOSE':
                computerWins++;
                console.log(`You win this round! ${playerSelection} beats ${computerSelection}.`);
                break;

            case 'DRAW':
                console.log(`You both have ${playerSelection}. It's a Draw.`);
                break;
            default:
                break;
        }
    }

    roundCount(playRound(playerSelection, computerSelection));
    console.log(`Player Win: ${playerWins} Lose: ${computerWins}`)


}

game();
game();
game();
game();
game();