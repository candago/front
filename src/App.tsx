import Botao from './components/Input/botao';
import Senha from './components/Input/senha';
import Login from './components/Input/login';

export default function App() {
  return (
    <>
        <img id='img' src="src/assets/Logo_Visiona2.png" alt="" />
          <Login />
          <Senha />
          <Botao />
    </>
  );
}