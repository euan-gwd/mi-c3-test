import React, { Component } from 'react';
import axios from 'axios';
import User from './User/User';
import './UserList.css';

class UserList extends Component {
  state = { users: {}, nextUrl: null, loaded: false, sortBy: 'name', orderDir: 'asc' };

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

  handleSortByColumn = id => {
    function compareValues(key, order = 'asc') {
      return function(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
          return 0;
        }

        const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
        const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
          comparison = 1;
        } else if (varA < varB) {
          comparison = -1;
        }
        return order === 'desc' ? comparison * -1 : comparison;
      };
    }

    const sortedUsers = this.state.users.sort(compareValues(id));
    this.setState({ users: sortedUsers });
  };

  render() {
    return (
      <div className="container">
        <nav className="navbar">
          <button className="navBtn">&#x021D0;Previous 10</button>
          <button className="navBtn" onClick={this.handleFetchNext}>
            Next 10 &#x021D2;
          </button>
        </nav>
        <div className="user-grid-headers">
          <button className="headerBtn" onClick={this.handleSortByColumn.bind(this, 'name')}>
            Name
          </button>
          <button className="headerBtn" onClick={this.handleSortByColumn.bind(this, 'height')}>
            Height
          </button>
          <button className="headerBtn" onClick={this.handleSortByColumn.bind(this, 'mass')}>
            Mass
          </button>
          <button className="headerBtn" onClick={this.handleSortByColumn.bind(this, 'created')}>
            Created
          </button>
          <button className="headerBtn" onClick={this.handleSortByColumn.bind(this, 'edited')}>
            Edited
          </button>
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
