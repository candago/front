import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #171D28;
  padding: 1rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;

  &:hover {
    background-color: #575757;
    border-radius: 4px;
  }
`;

const MenuAdm: React.FC = () => {
  return (
    <NavContainer>
      <NavLink to="/projetos">Projetos</NavLink>
      {/* <NavLink to="/estatisticas">Estatísticas</NavLink> */}
      <NavLink to="/usuarios">Usuários</NavLink>
      {/* <NavLink to="/configuracoes">Configurações</NavLink> */}
      <NavLink to="/logout">Logout</NavLink>
    </NavContainer>
  );
};

export default MenuAdm;
