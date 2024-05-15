import React, { useState } from 'react';


const Botao: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleClick = () => {
    const emailValido = email.includes('@');
    const senhaValida = senha.length >= 2;

    if (emailValido && senhaValida) {
      console.log("nice carai");
    } else {
      console.log('Email ou senha inválidos');
    }
  };


  return (
        <button type='button'
        id='botao'
        onClick={handleClick}
        >Entrar</button>
  );
};

export default Botao;