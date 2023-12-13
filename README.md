# Tic Tac Toe Game

## Introduction

This Tic Tac Toe game is a classic two-player game implemented using React.js. It allows players to take turns and determines the winner when a player forms a line with three of their symbols (X or O) horizontally, vertically, or diagonally.

## How the code works

1. Initial Setup:

- The code sets up the basic structure for a React component and imports necessary dependencies.
initialBoard is created as an array of 9 null values, representing the initial state of the game board.

2. Winning Combinations:

The calculateWinner function is defined to check for winning combinations on the Tic Tac Toe board.
It checks various combinations of indices to see if a player has formed a line (horizontally, vertically, or diagonally) and returns the winning symbol ('X' or 'O').

3. Square Component:

- The Square component is a functional component that represents an individual square on the game board.
- It takes value and onClick as props, displaying the value ('X', 'O', or empty) and handling the click event.

4. Board Component:

- The Board component is another functional component that manages the game board.
- It receives squares and onClick as props, maps through the squares, and renders a set of Square components with corresponding values and click handlers.

5. Game Component:

- The Game component is the main component that integrates the Board and manages the game state.
It uses the useState hook to maintain the game's history (history), the current step number (stepNumber), and the boolean flag (xIsNext) to determine the current player.
- The handleClick function is called when a square is clicked, updating the game state based on the current player's move.
- The status variable determines the game status, indicating the winner or the current player's turn.
- The components are rendered to create the Tic Tac Toe game interface.