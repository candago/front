import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface LoginProps {
  setEmail: (email: string) => void;
}

const Login: React.FC<LoginProps> = ({ setEmail }) => {
  const [email, setEmailDoBanco] = useState('');

  useEffect(() => {
    async function getEmail() {
      try {
        const response = await axios.post("http://localhost:3001/user/login", {
          email: "rafael@gmail.com",
          senha: "123"
        });
        const emailBanco = response.data[0].email;
        setEmailDoBanco(emailBanco);
      } catch (error) {
        console.error('Erro ao buscar dados do email:', error);
      }
    }
  }, []);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

      return (
        <>
        <div id='title'>
          <label htmlFor="email">Email</label>
          </div>
          <input
            type="text"
            id="login"
            placeholder="Insira o seu email"
            onChange={handleEmailChange}
            required
          />
        </>
      );
  }

  export default Login;