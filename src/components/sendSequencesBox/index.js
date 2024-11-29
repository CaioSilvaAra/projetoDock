import React from "react";
import "./style.css";
import ButtonConf from "../buttonConf";
import Mock from "../../mock/arraySendSequence";

function SendBox({ titulo }) {
  

  return (
    <div className="SendSequences">
      <label className="Information">{titulo}</label>

      <div className="ScrollableContent">
        <div className="teste">
          <ButtonConf titulo={"CONFG"} />
          <ButtonConf titulo={"VCONF"} />
          <ButtonConf titulo={"CONRF"} />
          <ButtonConf titulo={"VFGER"} />
          <ButtonConf titulo={"HALTS"} />
          <ButtonConf titulo={"TMINA"} />
          <ButtonConf titulo={"STERE"} />
          <Mock />

        </div>
      </div>
    </div>
  );
}

export default SendBox;
