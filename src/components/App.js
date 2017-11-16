import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

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
          <h1 className="App-title">Welcome to Custom React Starter Kit</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/components/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
