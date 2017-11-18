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
        <div className="user-grid-headers">
          <div>Name</div>
          <div>Height</div>
          <div>Mass</div>
          <div>Created</div>
          <div>Edited</div>
          <div>Planet</div>
        </div>
        <div>{this.state.users.map(user => <User key={user.name} userInfo={user} />)}</div>
        <nav className="navbar">
          <button className="nextBtn">Next Page>></button>
        </nav>
      </div>
    );
  }
}

export default UserList;
