import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './UserList/UserList';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mi-C3 FED App</h1>
        </header>
        <main>
          <UserList />
        </main>
      </div>
    );
  }
}

export default App;
