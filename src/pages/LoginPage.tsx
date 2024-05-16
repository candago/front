import Botao from '../components/Input/botao';
import Senha from "../components/Input/senha";
import Login from '../components/Input/login';
import { useState } from 'react';

export default function LoginPage() {
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");

  return (
      <>
      <img id="img" src="src/assets/Logo_Visiona2.png" alt="" />
      <div>
        <Login setEmail={setEmail} />
        <Senha setSenha={setSenha}/>
      <Botao />
    </div>
    </>
  );
}