
function computerPlay () {
    // create random number from 1 - 3
    let randNum = Math.floor(Math.random() * 3 + 1);
    
    switch (randNum) {
        case 1:
            return "Rock"
            break;
        case 2:
            return "Paper"
            break;
        case 3:
            return "Scissors"
            break;
    }
}