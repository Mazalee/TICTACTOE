import React from "react";
import Xicon from "./assets/icon-x.svg";
import Oicon from "./assets/icon-o.svg";
import { useDispatch } from "react-redux";
import { modalActions } from "./features/modalSllice";
import { gameActions } from "./features/gameSlice";

const GameMode = () => {
  const dispatch = useDispatch();
  const handlePlayerMode = (mode) => {
    dispatch(gameActions.startGame(mode));
    dispatch(modalActions.openPlayerGameModal());
  };
  const handleCPUMode = (mode) => {
    dispatch(gameActions.startGame(mode));
    dispatch(modalActions.openCpuGameModal());
  };

  return (
    <div className="mode-overlay">
      <div className="mode-content">
        <div className="mode-icon">
          <img className="img-icon" src={Xicon} alt="x-icon" />
          <img className="img-icon" src={Oicon} alt="o-icon" />
        </div>
        <div className="mode-inner">
          <h2>pick player 1's mark</h2>
          <div className="mode-innermost">
            <div className="circle-div1">
              <img className="img-icon" src={Xicon} alt="x-icon" />
            </div>
            <div className="circle-div2">
              <img className="img-icon" src={Oicon} alt="o-icon" />
            </div>
          </div>
          <h2>remember: x goes first</h2>
        </div>
        <div className="mode-button">
          <button
            className="btn cpu-btn"
            onClick={() => handleCPUMode("singleplayer")}
          >
            new game (vs cpu)
          </button>
          <button
            className="btn player-btn"
            onClick={() => handlePlayerMode("multiplayer")}
          >
            new game (vs player)
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameMode;
