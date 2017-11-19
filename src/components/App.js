import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import UserList from './UserList/UserList';

class App extends Component {
  state = {};
  render() {
    return (
      <AppContainer>
        <Header>
          <Logo src={logo} alt="logo" />
          <Title>Mi-C3 FED App</Title>
        </Header>
        <Main>
          <UserList />
        </Main>
        <Footer />
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
  display: grid;
  grid-template-rows: 80px auto 20px;
  box-sizing: border-box;
  background-color: white;
  min-height: 100vh;
  min-width: 600px;
  text-align: center;
  overflowy: hidden;
`;

const Header = styled.header`
  padding: 10px;
  color: #000;
  background-color: lightgrey;
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
  align-self: center;
`;

const Footer = styled.footer`
  background-color: lightgrey;
  padding: 10px;
  color: white;
`;

export default App;
