import React, { useEffect } from "react";
import axios from "axios";

interface SenhaProps {
  setSenha: (senha: string) => void;
}

const Senha: React.FC<SenhaProps> = ({ setSenha }) => {
  useEffect(() => {
    async function GetSenha() {
      try {
        const response = await axios.post("http://localhost:3001/user/login", {
          tablename: "usuarios",
        });
        const sample = response.data[0];
        const keys = Object.keys(sample);
        console.log(keys);
      } catch (error) {
        console.error("Erro ao buscar dados do email:", error);
      }
    }
  }, []);
  const handleSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value);
  };

  return (
    <>
      <div id="title">
        <label htmlFor="senha">Senha</label>
      </div>
      <input
        type="password"
        id="senha"
        placeholder="Insira a sua senha"
        onChange={handleSenhaChange}
        required
      />
    </>
  );
};

export default Senha;
