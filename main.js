
function computerPlay () {
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

    if (playerSelection === computerSelection) {
        return `You both have ${playerSelection}, it's a Draw.`
    } 
    else if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS')
    || (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    || (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) {
        return `You Win! ${playerSelection} beats ${computerSelection}.`
    }
    else {
        return `You lose ${computerSelection} beats ${playerSelection}.`
    }
}

const playerSelection = 'rock'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))