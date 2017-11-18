import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import UserList from './UserList/UserList';

class App extends Component {
  state = {};
  render() {
    return (
      <AppWrapper>
        <Header>
          <Logo src={logo} alt="logo" />
          <Title>Mi-C3 FED Test App</Title>
        </Header>
        <Main>
          <UserList />
        </Main>
        <Footer />
      </AppWrapper>
    );
  }
}

const AppWrapper = styled.div`
  background-color: white;
`;

const Header = styled.header`
  height: 80px;
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
`;

const Footer = styled.footer`
  background-color: lightgrey;
  height: 10px;
  padding: 10px;
  color: white;
`;

export default App;
