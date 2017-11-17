import React, { Component } from 'react';
import axios from 'axios';
import User from './User/User';
import './UserList.css';

class UserList extends Component {
  state = { users: [] };

  componentDidMount = () => {
    axios.get(`https://swapi.co/api/people`).then(res => {
      this.setState({ users: res.data.results });
    });
  };

  render() {
    return (
      <div className="table">
        <div className="user-grid-headers">
          <div>Name</div>
          <div>Height</div>
          <div>Mass</div>
          <div>Created</div>
          <div>Edited</div>
          <div>Homeworld</div>
        </div>
        <div>{this.state.users.map(user => <User key={user.name} userInfo={user} />)}</div>
      </div>
    );
  }
}

export default UserList;
