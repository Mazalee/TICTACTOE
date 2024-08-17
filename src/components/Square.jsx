import React from "react";
import Xicon from "../assets/icon-x.svg";
import Oicon from "../assets/icon-o.svg";

const Square = ({ val, chooseSquare }) => {
  let icon = null;

  if (val === "X") {
    icon = <img className="sq-icon" src={Xicon} alt="X icon" />;
  } else if (val === "O") {
    icon = <img className="sq-icon" src={Oicon} alt="O icon" />;
  }

  return (
    <div className="square" onClick={chooseSquare}>
      {icon}
    </div>
  );
};

export default Square;
