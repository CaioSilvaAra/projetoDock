import "./style.css";
import React, { useState } from "react";

function Input({ titulo, initialValue, placeholder }) {

  const [inputText, setLabelText] = useState(initialValue);

  const handleInputChange = (e) => {
    setLabelText(e.target.value);
  };

  return (
    <div>
      <label className="Information">{titulo}</label>
      <input
        className="boxInput"
        value={inputText}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </div>
  );
}
export default Input;
