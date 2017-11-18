import React, { Component } from 'react';
import axios from 'axios';
import User from './User/User';
import './UserList.css';

class UserList extends Component {
  state = { users: [], nextUrl: null };

  componentDidMount = () => {
    const url = `https://swapi.co/api/people`;
    axios.get(url).then(res => {
      this.setState({ users: res.data.results, nextUrl: res.data.next });
    });
  };

  render() {
    return (
      <div className="container">
        <nav className="navbar">
          <button className="navBtn">&#x021D0;Back</button>
          <label htmlFor="search">
            Filter by Name
            <input type="search" name="" id="search" />
          </label>
          <button className="navBtn">Next&#x021D2;</button>
        </nav>
        <div className="user-grid-headers">
          <div>Name</div>
          <div>Height</div>
          <div>Mass</div>
          <div>Created</div>
          <div>Edited</div>
          <div>Planet</div>
        </div>
        <div>{this.state.users.map(user => <User key={user.name} userInfo={user} />)}</div>
      </div>
    );
  }
}

export default UserList;
