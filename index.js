const ROCK = 'rock';
const SCISSORS = 'scissors';
const PAPER = 'paper';

function computerPlay() {
    const moves = [ROCK, PAPER, SCISSORS];
    const randomMove = moves[Math.floor(Math.random()*moves.length)];
    return randomMove;
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        return 'Tie'
    } 
    else if(playerSelection === ROCK) {
        if(computerSelection === PAPER) {
            return 'You Lose! Paper beats Rock.'
        } else{
            return 'You Won!'
        }
    }
    else if(playerSelection === SCISSORS) {
        if(computerSelection === ROCK) {
            return 'You Lose! Rock beats Scissors.'
        } else {
            return 'You Won!'
        }
    }
    else if(playerSelection === PAPER) {
        if(computerSelection === SCISSORS) {
            return 'You Lose! Scissors beat Paper'
        } else {
            return 'You Won!'
        }
    }
    return 'Invalid input! Try again';
}

function game() {
    const results = [];
    let round = 0;
    while(round < 5) {
        const playerSelection = prompt("What is your choise?");
        const computerSelection = computerPlay();
        const result = playRound(playerSelection.toLowerCase(), computerSelection);
        console.log("result", result);
        if (result !== 'Invalid input! Try again') {
            round++;
            results.push(result)
        }
    }
    return results;
}

game();