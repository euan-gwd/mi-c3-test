import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import UserList from './UserList';

class App extends Component {
  state = { users: [] };

  componentDidMount = () => {
    axios.get(`https://swapi.co/api/people`).then(res => {
      const usersData = res.data.results;
      this.setState({ users: usersData });
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mi-C3 FED Test App</h1>
        </header>
        <main>
          <UserList users={this.state.users} />
        </main>
      </div>
    );
  }
}

export default App;
