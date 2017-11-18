import React, { Component } from 'react';
import axios from 'axios';
import User from './User/User';
import './UserList.css';

class UserList extends Component {
  state = { users: [], nextUrl: null, loaded: false };

  componentDidMount = () => {
    axios.get(`https://swapi.co/api/people`).then(res => {
      this.setState({ users: res.data.results, nextUrl: res.data.next, loaded: true });
    });
  };

  handleFetchNext = () => {
    this.setState({ loaded: false });
    if (this.state.nextUrl) {
      axios.get(this.state.nextUrl).then(res => {
        this.setState({ users: res.data.results, nextUrl: res.data.next, loaded: true });
      });
    }
  };

  render() {
    return (
      <div className="container">
        <nav className="navbar">
          <button className="navBtn">&#x021D0;Previous 10</button>
          <label htmlFor="search">
            Search
            <input type="search" name="" id="search" />
          </label>
          <button className="navBtn" onClick={this.handleFetchNext}>
            Next 10 &#x021D2;
          </button>
        </nav>
        <div className="user-grid-headers">
          <div>Name</div>
          <div>Height</div>
          <div>Mass</div>
          <div>Created</div>
          <div>Edited</div>
          <div>Planet</div>
        </div>
        {this.state.loaded ? (
          <div>{this.state.users.map(user => <User key={user.name} userInfo={user} />)}</div>
        ) : (
          <div>
            <div className="loader">Loading...</div>
          </div>
        )}
      </div>
    );
  }
}

export default UserList;
