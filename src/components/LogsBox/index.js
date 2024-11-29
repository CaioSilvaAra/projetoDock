import React from "react";
import "./style.css"
import SerialComunication from "../../service/webSocket";
import Alo from "../teste";

function LogsBox({ message }) {
    return (
        <div className="ScreenLogs">
            <SerialComunication />

        </div>
    );
}

export default LogsBox;
