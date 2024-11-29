import React from "react";
import "./style.css"; // Importando o arquivo CSS

function ButtonConf({ titulo, onClick }) {
  return (
    <button className="ButtonConf" onClick={onClick}>
      <label className="TituloConf">{titulo}</label>
    </button>
  );
}

export default ButtonConf;
