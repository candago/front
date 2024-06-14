import React, { useEffect, useState } from "react";
import { useUser } from "../hooks";
import { ErrorBar } from "../components";
import styled, { createGlobalStyle } from "styled-components";
import "normalize.css"; // Import normalize.css for resets

// Define global styles with normalize.css
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif; /* Replace with your font */
  }
`;


// Styled components
const PageContainer = styled.div`
  background-color: #19212C;
  color: #fff;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  width: 70%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.div`
  background-color: #313842;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  width: 100%;
`;

const UserListContainer = styled.div`
  background-color: #313842;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 60%;
  padding: 8px;
  margin-bottom: 16px;
  border-radius: 4px;
  border: none;
`;

const Select = styled.select`
  width: 50%;
  padding: 8px;
  margin-bottom: 16px;
  border-radius: 4px;
  border: none;
`;

const ButtonCreate = styled.button`
  justify-content: center;
  background-color: #555;
  width: 150px;
  height: 30px;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #666;
  }
`;

const Button = styled.button`
  justify-content: center;
  background-color: #555;
  width: 80px;
  margin: 8px;
  height: 30px;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #666;
  }
`;

const UserPage: React.FC = () => {
  const { error, setError, users, getUsers, create, remove } = useUser();
  const [mail, setMail] = useState<string>("a@teste.com");
  const [password, setPassword] = useState<string>("123456");
  const [profile, setProfile] = useState<string>("user");

  useEffect(() => {
    setError(null);
    if (!users) {
      getUsers(); //obtém os usuários cadastrados
    }
  }, [getUsers, users, setError]);

  const handleCreate = async () => {
    if (!mail) {
      setError({ erro: "Forneça o e-mail" });
    } else if (!password) {
      setError({ erro: "Forneça a senha" });
    } else {
      await create(mail, password, profile);
    }
  };

  return (
    <>
      <GlobalStyle /> {/* Apply global styles */}
      <PageContainer>
        <ContentContainer>
          {error ? <ErrorBar>{error.erro}</ErrorBar> : null}
          <FormContainer>
            <div>
              <Label>e-mail</Label>
              <Input value={mail} onChange={(e) => setMail(e.target.value)} />
            </div>
            <div>
              <Label>Senha</Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <Label>Perfil</Label>
              <Select
                value={profile}
                onChange={(e) => setProfile(e.target.value)}
              >
                <option value="adm">Administrador</option>
                <option value="user">Usuário</option>
              </Select>
            </div>
            <div>
              <ButtonCreate onClick={handleCreate}>Criar usuário</ButtonCreate>
            </div>
          </FormContainer>
          <UserListContainer>
            <h4>Usuários</h4>
            {users && users.length > 0 ? (
              <ol>
                {users.map((user) => (
                  <li key={user.id}>
                    {user.mail} {user.profile}
                    <Button onClick={() => remove(user.id)}>Excluir</Button>
                  </li>
                ))}
              </ol>
            ) : (
              <p>Nenhum usuário encontrado</p>
            )}
          </UserListContainer>
        </ContentContainer>
      </PageContainer>
    </>
  );
};

export default UserPage;
