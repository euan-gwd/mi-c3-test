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
          <Title>Mi-C3 FED App</Title>
        </Header>
        <Main>
          <UserList />
        </Main>
      </AppWrapper>
    );
  }
}

const AppWrapper = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const Logo = styled.img`
  height: 80px;
`;

const Title = styled.h1`
  font-size: 1.5em;
`;

const Main = styled.main`
  font-size: 16px;
`;

export default App;
