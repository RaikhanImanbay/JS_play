const ROCK = "Rock";
const SCISSORS = "Scissors";
const PAPER = "Paper";
let PL_COUNTER = 0;
let CP_COUNTER = 0;

function play(playerSelection) {
    document.getElementById('total-result').innerHTML = "";
    document.getElementById('player-select').innerHTML = playerSelection;
    const computerSelection = computerPlay();
    document.getElementById('computer-select').innerHTML = computerSelection;
    const result = playRound(playerSelection, computerSelection);
    document.getElementById('result').innerHTML = result;
    determineWinner(result);
}

function computerPlay() {
    const moves = [ROCK, PAPER, SCISSORS];
    const randomMove = moves[Math.floor(Math.random() * moves.length)];
    return randomMove;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie'
    }
    else if (playerSelection === ROCK) {
        if (computerSelection === PAPER) {
            return 'You Lose! Paper beats Rock.'
        } else {
            return 'You Won!'
        }
    }
    else if (playerSelection === SCISSORS) {
        if (computerSelection === ROCK) {
            return 'You Lose! Rock beats Scissors.'
        } else {
            return 'You Won!'
        }
    }
    else if (playerSelection === PAPER) {
        if (computerSelection === SCISSORS) {
            return 'You Lose! Scissors beat Paper'
        } else {
            return 'You Won!'
        }
    }
    return 'Invalid input! Try again';
}

function determineWinner(result) {
    if (result === 'You Won!') {
        PL_COUNTER++;
    } else if (result.startsWith('You Lose!')) {
        CP_COUNTER++;
    }
    if (PL_COUNTER === 5 || CP_COUNTER === 5) {
        document.getElementById('total-result').innerHTML =
            PL_COUNTER > CP_COUNTER
                ? 'YOU WON!'
                : 'YOU LOST!';
        PL_COUNTER = 0;
        CP_COUNTER = 0;
    }
}