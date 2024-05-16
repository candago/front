import axios from 'axios';
import React, { useState } from 'react';

const Botao: React.FC = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleClick = () => {
    const emailInfo = (document.getElementById("login") as HTMLInputElement)
      .value;
    const senhaInfo = (document.getElementById("senha") as HTMLInputElement)
      .value;
    signin(emailInfo, senhaInfo);
    const emailValido = email.includes("@");
    const senhaValida = senha.length >= 2;

    if (emailValido && senhaValida) {
      console.log("nice carai");
    } else {
      console.log("CANDAGO FOREVER");
    }
  };

  return (
    <button type="button" id="botao" onClick={handleClick}>
      Entrar
    </button>
  );
  async function signin(
    emailInfo: string | undefined,
    senhaInfo: string | undefined,
  ) {
    const tentativaLogin = await axios
      .post("http://localhost:3001/user/login", {
        email: emailInfo,
        senha: senhaInfo,
      })
      .then(function (response) {console.log(response.status)});
    return tentativaLogin;
  }
};

export default Botao;