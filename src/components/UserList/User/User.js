import React, { Component } from 'react';
import { format } from 'date-fns';
import Modal from '../../UI/Modal/Modal';
import Planet from '../Planet/Planet';
import './User.css';

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
        <div className="grid-table-data">
          <div>{userInfo.name}</div>
          <div>{userInfo.height}cm</div>
          <div>{userInfo.mass}kg</div>
          <div>{format(userInfo.created, 'DD/MM/YYYY HH:mm:ss')}</div>
          <div>{format(userInfo.edited, 'DD/MM/YYYY HH:mm:ss')}</div>
          <button className="planetBtn" onClick={this.handleModalOpen}>
            View
          </button>
        </div>
        <Modal show={this.state.showModal} hide={this.handleModalClose}>
          <Planet url={userInfo.homeworld} />
        </Modal>
      </div>
    );
  }
}

export default User;
