// RPSLS-game.js

// Get the player's move from process.argv
const playerMove = process.argv[2]?.toLowerCase();

// Validate the player's input
if (!["r", "p", "s", "l", "sp"].includes(playerMove)) {
    console.log("Invalid input! Use 'r' for rock, 'p' for paper, 's' for scissors, 'l' for lizard, or 'sp' for spock.");
    process.exit(1);
}

// Map shorthand inputs to full names
const moves = {
    r: "rock",
    p: "paper",
    s: "scissors",
    l: "lizard",
    sp: "spock"
};

// Randomly generate a move for the computer
const computerMoveKey = ["r", "p", "s", "l", "sp"][Math.floor(Math.random() * 5)];
const computerMove = moves[computerMoveKey];

// Define the rules of the game
const rules = {
    r: ["s", "l"], // Rock crushes Scissors and Lizard
    p: ["r", "sp"], // Paper covers Rock and disproves Spock
    s: ["p", "l"], // Scissors cuts Paper and decapitates Lizard
    l: ["sp", "p"], // Lizard poisons Spock and eats Paper
    sp: ["s", "r"] // Spock smashes Scissors and vaporizes Rock
};

// Determine the outcome
let result;
if (playerMove === computerMoveKey) {
    result = "It's a draw!";
} else if (rules[playerMove].includes(computerMoveKey)) {
    result = "You win!";
} else {
    result = "You lose!";
}

// Output the result
console.log(`You chose ${moves[playerMove]}. Computer chose ${computerMove}. ${result}`);
