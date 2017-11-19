import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import User from './User/User';

class UserList extends Component {
  state = {
    users: {},
    nextUrl: null,
    prevUrl: null,
    loaded: false
  };

  componentDidMount = () => {
    axios.get(`https://swapi.co/api/people`).then(res => {
      this.setState({ users: res.data.results, nextUrl: res.data.next, loaded: true });
    });
  };

  handleFetchNext = () => {
    this.setState({ loaded: false });
    if (this.state.nextUrl) {
      axios.get(this.state.nextUrl).then(res => {
        this.setState({
          users: res.data.results,
          nextUrl: res.data.next,
          prevUrl: res.data.previous || null,
          loaded: true
        });
      });
    }
  };

  handleFetchPrev = () => {
    this.setState({ loaded: false });
    if (this.state.prevUrl) {
      axios.get(this.state.prevUrl).then(res => {
        this.setState({ users: res.data.results, nextUrl: res.data.next, prevUrl: res.data.previous, loaded: true });
      });
    }
  };

  handleSortByColumn = id => {
    function compareValues(key, order = 'asc') {
      return function(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
          return 0;
        }

        const itemA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
        const itemB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (itemA > itemB) {
          comparison = 1;
        } else if (itemA < itemB) {
          comparison = -1;
        }
        return order === 'desc' ? comparison * -1 : comparison;
      };
    }

    const usersArray = [...this.state.users];
    const sortedUsers = usersArray.sort(compareValues(id));
    this.setState({ users: sortedUsers });
  };

  render() {
    return (
      <Container>
        <UserGridHeaderBar>
          <HeaderBarBtn onClick={this.handleSortByColumn.bind(this, 'name')}>Name</HeaderBarBtn>
          <HeaderBarBtn onClick={this.handleSortByColumn.bind(this, 'height')}>Height</HeaderBarBtn>
          <HeaderBarBtn onClick={this.handleSortByColumn.bind(this, 'mass')}>Mass</HeaderBarBtn>
          <HeaderBarBtn onClick={this.handleSortByColumn.bind(this, 'created')}>Created</HeaderBarBtn>
          <HeaderBarBtn onClick={this.handleSortByColumn.bind(this, 'edited')}>Edited</HeaderBarBtn>
          <HeaderBarItem>Planet</HeaderBarItem>
        </UserGridHeaderBar>
        {this.state.loaded ? (
          <div>{this.state.users.map(user => <User key={user.name} userInfo={user} />)}</div>
        ) : (
          <div>
            <Loader>Loading...</Loader>
          </div>
        )}
        <NavBar>
          {this.state.prevUrl ? <NavBtn onClick={this.handleFetchPrev}>&#x021D0;Previous</NavBtn> : <div />}
          <NavBtn onClick={this.handleFetchNext}>Next &#x021D2;</NavBtn>
        </NavBar>
      </Container>
    );
  }
}

const Container = styled.div`
  box-sizing: border-box;
  min-width: 600px;
  max-width: 1024px;
  margin: 0.25rem auto;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0;
  margin: 0;
`;

const NavBtn = styled.button`
  border: 0;
  border-radius: 0;
  padding: 0;
  margin: 0;
  color: lightslategray;
  background-color: transparent;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    color: #fda61e;
    background-color: transparent;
    text-decoration: underline;
    outline: 0;
    border: 0;
  }

  &:focus,
  &:active {
    color: lightslategray;
    outline: 0;
    border: 0;
  }
`;

const UserGridHeaderBar = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  height: 50px;
  box-sizing: border-box;
  text-align: center;
  align-items: center;
  border: 1px solid black;
  box-shadow: 0 2px 5px 0 rgba(50, 50, 50, 0.75);
  background-color: #fda61e;
  color: whitesmoke;
`;

const HeaderBarBtn = styled.button`
  border: 0;
  border-radius: 0;
  padding: 0;
  margin: 0;
  color: white;
  background-color: transparent;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    color: darkgray;
    background-color: transparent;
    text-decoration: underline;
    outline: 0;
    border: 0;
  }

  &:active,
  &:focus,
  &:disabled {
    outline: 0;
    border: 0;
  }
`;

const HeaderBarItem = styled.button`
  border: 0;
  border-radius: 0;
  padding: 0;
  margin: 0;
  color: white;
  background-color: transparent;
  font-size: 1rem;
`;

const Loader = styled.div`
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  animation-fill-mode: both;
  animation: load7 1.8s infinite ease-in-out;
  color: lightslategray;
  font-size: 10px;
  margin: 80px auto;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  animation-delay: -0.16s;

  &::before,
  &::after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    animation-fill-mode: both;
    animation: load7 1.8s infinite ease-in-out;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
  }

  &::before {
    left: -3.5em;
    animation-delay: -0.32s;
  }

  &::after {
    left: 3.5em;
  }

  @keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
`;

export default UserList;
