import React, { useEffect } from "react";
import Xicon from "../assets/icon-x.svg";
import Oicon from "../assets/icon-o.svg";
import Ricon from "../assets/icon-restart.svg";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "../features/gameSlice";
import Square from "./Square";
import { modalActions } from "../features/modalSllice";

const GameScreen = () => {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.game.board);
  const currentPlayer = useSelector((state) => state.game.currentPlayer);
  const player = currentPlayer === "X" ? Xicon : Oicon;
  const winner = useSelector((state) => state.game.winner);
  const gameMode = useSelector((state) => state.game.gameMode);
  const xScore = useSelector((state) => state.game.xScore);
  const oScore = useSelector((state) => state.game.oScore);
  const ties = useSelector((state) => state.game.ties);

  useEffect(() => {
    if (
      gameMode === "singleplayer" &&
      currentPlayer === "O" &&
      winner === null
    ) {
      setTimeout(() => {
        dispatch(gameActions.makeComputerMove());
      }, 500);
    }
  }, [currentPlayer, gameMode, winner, dispatch]);

  useEffect(() => {
    if (winner === "X" || winner === "O") {
      console.log("we have a winner");
      dispatch(modalActions.openWinnerModal());
    } else if (winner === "Tie") {
      dispatch(modalActions.openTieModal());
    }
  }, [winner, dispatch]);

  const handleClick = (index) => {
    dispatch(gameActions.makeMove({ index }));
  };
  const restartGame = () => {
    dispatch(gameActions.resetGame());
    if (gameMode === "singleplayer") {
    }
  };

  return (
    <div className="game-screen">
      <div className="board">
        <div className="square-top no-bg">
          <img className="img-icon" src={Xicon} alt="x-icon" />
          <img className="img-icon" src={Oicon} alt="o-icon" />
        </div>
        <div className="square-top yes-bg">
          <img className="turn-icon" src={player} alt="current player" />
          <span className="turn">Turn</span>
        </div>
        <div className="square-top refresh" onClick={restartGame}>
          <img className="r-img" src={Ricon} alt="r-icon" />
        </div>
        <Square chooseSquare={() => handleClick(0)} val={board[0]} />
        <Square chooseSquare={() => handleClick(1)} val={board[1]} />
        <Square chooseSquare={() => handleClick(2)} val={board[2]} />
        <Square chooseSquare={() => handleClick(3)} val={board[3]} />
        <Square chooseSquare={() => handleClick(4)} val={board[4]} />
        <Square chooseSquare={() => handleClick(5)} val={board[5]} />
        <Square chooseSquare={() => handleClick(6)} val={board[6]} />
        <Square chooseSquare={() => handleClick(7)} val={board[7]} />
        <Square chooseSquare={() => handleClick(8)} val={board[8]} />
        <div className="square-bottom bottom-first">
          <h2>X (YOU)</h2>
          <h1>{xScore}</h1>
        </div>

        <div className="square-bottom bottom-second">
          <h2>TIES</h2>
          <h1>{ties}</h1>
        </div>

        <div className="square-bottom bottom-third">
          <h2>O (CPU)</h2>
          <h1>{oScore}</h1>
        </div>
      </div>
    </div>
  );
};

export default GameScreen;
