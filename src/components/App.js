import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import UserList from './UserList/UserList';

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header>
          <Logo src={logo} alt="logo" />
          <Title>Mi-C3 FED Test App</Title>
        </Header>
        <Main>
          <UserList />
        </Main>
        <Footer />
      </div>
    );
  }
}

const Header = styled.header`
  background-color: lightgrey;
  height: 80px;
  padding: 10px;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  height: 70px;
`;

const Title = styled.h1`
  font-size: 1.5em;
  margin-left: 0.5rem;
`;

const Main = styled.main`
  font-size: 16px;
  margin: 0 15px;
`;

const Footer = styled.footer`
  background-color: lightgrey;
  height: 20px;
  padding: 20px;
  color: white;
`;

export default App;
