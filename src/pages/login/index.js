import "./style.css";
import Input from "../../components/input";
import React, { useState } from "react";
import Logo from "../../assets/sincron-logo-v1 (1).png";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState("admin");
  const [password, setPassword] = useState("salutem12");

  
  
  const navigate = useNavigate(); // Usamos o hook useNavigate para navegação
  const handleClick = () => {
    navigate('/home'); // A URL da página para a qual você quer ir
  
  }
  return (
    <div className="Screen">
      <div className="ScreenLogin">
        <div className="ScreenLogo">
          <img
            src={Logo}
            alt="Logo da Sincron"
            title="Logo da Sincron"
            className="logo"
          />
          
        </div>
        <div className="ScreenUser">
          <h1 className="h1Login">LOGIN</h1>
          <Input
            titulo={"Usuário"}
            value={user}
            onChageText={() => setUser}
            placeholder={"Digite o Usuário"}
          />
          <Input
            titulo={"Senha"}
            value={password}
            onChageText={() => setPassword}
            placeholder={"Digite a Senha"}
          />

          <div className="buttonBox">
            <Button onClick={handleClick}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
