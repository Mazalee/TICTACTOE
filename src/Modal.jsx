import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "./features/modalSllice";
import { gameActions } from "./features/gameSlice";
import Xicon from "./assets/icon-x.svg";
import Oicon from "./assets/icon-o.svg";

const Modal = () => {
  const dispatch = useDispatch();
  const modalOpen = useSelector((state) => state.modal.isWinnerModalOpen);
  const winner = useSelector((state) => state.game.winner);
  const tieModalOpen = useSelector((state) => state.modal.isTieModalOpen);
  const playerMode = useSelector((state) => state.modal.isPlayerMode);
  const CPUMode = useSelector((state) => state.modal.isCPUMode);

  const quitGame = () => {
    dispatch(modalActions.closeWinnerModal());
    dispatch(modalActions.closeTieModal());
    dispatch(gameActions.resetGame());
    dispatch(gameActions.startGame());
    dispatch(modalActions.closeCpuGameModal());
    dispatch(modalActions.closePlayerGameModal());
  };

  const nextRound = () => {
    dispatch(gameActions.nextRound());
    dispatch(modalActions.closeWinnerModal());
    dispatch(modalActions.closeTieModal());
  };

  let winnerIcon = null;
  if (winner === "X") {
    winnerIcon = <img className="modal-icon" src={Xicon} alt="X icon" />;
  } else if (winner === "O") {
    winnerIcon = <img className="modal-icon" src={Oicon} alt="O icon" />;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>
          {winner === "X" && playerMode
            ? "player 2 wins!"
            : winner === "O" && playerMode
            ? "player 1 wins!"
            : winner === "X" && CPUMode
            ? "you won!"
            : winner === "O" && CPUMode
            ? "oh no, you lost..."
            : winner === "Tie"
            ? "round tied"
            : null}
        </p>
        <div className="rounds">
          <span>{winnerIcon}</span>
          <h2>{winner === "X" || winner === "O" ? "takes the round" : null}</h2>
        </div>
        <div className="modal-button">
          <button className="btn btn-quit" onClick={quitGame}>
            Quit
          </button>
          <button className="btn btn-next" onClick={nextRound}>
            Next Round
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
