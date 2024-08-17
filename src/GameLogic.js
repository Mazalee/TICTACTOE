import { Patterns } from "./Patterns";

export const checkWin = (board) => {
  for (const pattern of Patterns) {
    const [a, b, c] = pattern;
    const playerSymbol = board[a];

    if (playerSymbol === "") continue;

    if (
      board[a] === playerSymbol &&
      board[b] === playerSymbol &&
      board[c] === playerSymbol
    ) {
      return playerSymbol; // Return the symbol of the winning player
    }
  }
  return null; // Return null if there is no winner
};

export const checkIfTie = (board) => {
  const isBoardFilled = board.every((square) => square !== "");
  if (isBoardFilled) {
    return true; // Return true if all squares are filled and no winner
  }
  return false; // Return false if there are still empty squares
};
