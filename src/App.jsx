import React from "react";
import GameScreen from "./components/GameScreen";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import GameMode from "./GameMode";

const App = () => {
  const modalOpen = useSelector((state) => state.modal.isWinnerModalOpen);
  const tieModalOpen = useSelector((state) => state.modal.isTieModalOpen);
  const playerMode = useSelector((state) => state.modal.isPlayerMode);
  const CPUMode = useSelector((state) => state.modal.isCPUMode);

  return (
    <main>
      {playerMode || CPUMode ? <GameScreen /> : <GameMode />}
      {(modalOpen || tieModalOpen) && <Modal />}
    </main>
  );
};

export default App;
