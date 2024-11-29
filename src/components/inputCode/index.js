import React, { useEffect, useState } from "react";
import "./style.css";

function InputCode({ index, id }) {
  // Estado para o valor do input, começando como uma string vazia.
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    // Carregar o valor do input a partir do localStorage usando o índice
    const savedValue = localStorage.getItem(`inputValue-${index}`);

    if (savedValue) {
      try {
        setInputValue(JSON.parse(savedValue));
      } catch (error) {
        console.error("Erro ao fazer parse do valor armazenado:", error);
      }
    }
  }, [index]); // Dependência do índice para carregar o valor correto

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    // Salvar o valor no localStorage usando o índice para chave única
    localStorage.setItem(`inputValue-${index}`, JSON.stringify(newValue));
  };

  return (
    <input
      id={id} // Usando o id único
      type="text"
      className="InputBox"
      value={inputValue || ""}
      onChange={handleChange}
    />
  );
}

export default InputCode;
