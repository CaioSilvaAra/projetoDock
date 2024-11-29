import React from "react";
import "./style.css";
import SendBox from "../../components/sendSequencesBox";
import ButtonConf from "../../components/buttonConf";
import LogsBox from "../../components/LogsBox";

function Home() {
  return (
    <div className="ScreenTotal">
      <div className="ScreenLeft">
        <SendBox titulo={"Send Sequences"} />
      </div>
      <div className="Screenright">
        <div className="TypeRead">
          <ButtonConf titulo={"ASCII"} />
          <ButtonConf titulo={"HEX"} />
          <ButtonConf titulo={"Decimal"} />
          <ButtonConf titulo={"Binary"} />
        </div>

        <LogsBox />
      </div>
    </div>
  );
}

export default Home;
