import React from "react";
import ButtonConf from "../components/buttonConf";
import InputCode from "../components/inputCode";
import Alo from "../components/teste"

function Mock() {
  // Cria um array de elementos com o loop for
  const items = [];

  for (let i = 1; i < 81; i++) {
    items.push(
      <div
        key={i}
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        {/* <ButtonConf titulo={"Ponto " + i} /> */}
        {/* <InputCode index={i} /> Passando o índice para cada InputCode */}
        <Alo index={i}/>
      </div>
    );
  }

  // Retorna o JSX com os itens criados pelo loop
  return <div>{items}</div>;
}

export default Mock;
