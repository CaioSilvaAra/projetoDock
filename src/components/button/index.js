import React from "react";
import "./style.css";

function Button({ onClick }) {
  // const [isMoved, setIsMoved] = useState(false);

  // const handleClick = () => {
  //   setIsMoved(!isMoved);
  // };

  return (
    <button
      className={"button"}
      // onClick={handleClick}
      onClick={onClick}
    >
      ACESSAR
    </button>
  );
}
export default Button;
