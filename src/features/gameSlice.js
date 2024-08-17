import { createSlice } from "@reduxjs/toolkit";
import { Patterns } from "../Patterns";
import { checkIfTie, checkWin } from "../GameLogic";

const initialState = {
  board: ["", "", "", "", "", "", "", "", ""],
  currentPlayer: "X",
  winner: null,
  gameMode: "multiplayer",
  xScore: 0,
  oScore: 0,
  ties: 0,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame(state, action) {
      state.gameMode = action.payload; // "singleplayer" or "multiplayer"
      state.board = ["", "", "", "", "", "", "", "", ""];
      state.currentPlayer = "X";
      state.winner = null;
    },
    nextRound(state) {
      state.board = ["", "", "", "", "", "", "", "", ""];
      state.currentPlayer = "X";
      state.winner = null;
    },
    makeMove(state, action) {
      const { index } = action.payload;
      if ((state.board[index] === "") & (state.winner === null)) {
        state.board[index] = state.currentPlayer;
        const winner = checkWin(state.board);
        if (winner) {
          state.winner = winner;
          if (winner === "X") {
            state.xScore += 1;
          } else if (winner === "O") {
            state.oScore += 1;
          }
        } else if (checkIfTie(state.board)) {
          state.winner = "Tie";
          state.ties += 1;
        } else {
          state.currentPlayer = state.currentPlayer === "X" ? "O" : "X";
        }
      }
    },
    makeComputerMove(state) {
      if (
        state.gameMode === "singleplayer" &&
        state.currentPlayer === "O" &&
        state.winner === null
      ) {
        const emptySquares = state.board
          .map((val, idx) => (val === "" ? idx : null))
          .filter((val) => val !== null);
        const randomMove =
          emptySquares[Math.floor(Math.random() * emptySquares.length)];
        state.board[randomMove] = "O";
        const winner = checkWin(state.board);
        if (winner) {
          state.winner = winner;
          if (winner === "O") {
            state.oScore += 1;
          }
        } else if (checkIfTie(state.board)) {
          state.winner = "Tie";
          state.ties += 1;
        } else {
          state.currentPlayer = "X";
        }
      }
    },
    resetGame(state) {
      state.board = ["", "", "", "", "", "", "", "", ""];
      state.currentPlayer = "X";
      state.winner = null;
      state.xScore = "";
      state.oScore = "";
      state.ties = "";
    },
  },
});

export const gameActions = gameSlice.actions;
