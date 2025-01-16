// RPS-game.js

// Get player's move from process.argv
const playerMove = process.argv[2]?.toLowerCase();

// Validate player's input
if (!["r", "p", "s"].includes(playerMove)) {
    console.log("Invalid input! Use 'r' for rock, 'p' for paper, or 's' for scissors.");
    process.exit(1);
}

// Match shorthand inputs to full move names
const moves = {
    r: "rock",
    p: "paper",
    s: "scissors"
};

// Draw random move for the computer
const computerMoveKey = ["r", "p", "s"][Math.floor(Math.random() * 3)];
const computerMove = moves[computerMoveKey];

// Determine the outcome
let result;
if (playerMove === computerMoveKey) {
    result = "It's a draw!";
} else if (
    (playerMove === "r" && computerMoveKey === "s") || 
    (playerMove === "p" && computerMoveKey === "r") || 
    (playerMove === "s" && computerMoveKey === "p")
) {
    result = "You win!";
} else {
    result = "You lose!";
}

// Output the result
console.log(`You chose ${moves[playerMove]}. Computer chose ${computerMove}. ${result}`);
