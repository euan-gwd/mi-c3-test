import React, { Component } from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';
import Modal from '../Modal/Modal';
import Planet from '../Planet/Planet';

class User extends Component {
  state = { showModal: false };

  handleModalOpen = () => {
    this.setState({ showModal: true });
  };

  handleModalClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { userInfo } = this.props;
    return (
      <div>
        <UserGridTable>
          <div>{userInfo.name}</div>
          <div>{userInfo.height}</div>
          <div>{userInfo.mass}</div>
          <div>{format(userInfo.created, 'DD/MM/YYYY HH:mm:ss')}</div>
          <div>{format(userInfo.edited, 'DD/MM/YYYY HH:mm:ss')}</div>
          <PlanetBtn onClick={this.handleModalOpen}>View</PlanetBtn>
        </UserGridTable>
        <Modal show={this.state.showModal} hide={this.handleModalClose}>
          <Planet url={userInfo.homeworld} username={userInfo.name} />
        </Modal>
      </div>
    );
  }
}

const UserGridTable = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(50px, 1fr));
  grid-auto-rows: 50px;
  box-sizing: border-box;
  align-items: center;
  justify-items: center;
  border: 0.25px solid grey;
`;

const PlanetBtn = styled.button`
  border: 0;
  border-radius: 0;
  padding: 0;
  margin: 0;
  color: grey;
  background-color: transparent;
  cursor: pointer;
  font-size: 1rem;
  width: 50%;
  align-self: center;
  justify-self: center;

  &:hover {
    color: #fda61e;
    background-color: transparent;
    text-decoration: underline;
    outline: 0;
    border: 0;
  }

  &:focus,
  &:active {
    outline: 0;
    border: 0;
  }
`;

export default User;
