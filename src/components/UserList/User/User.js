import React, { Component } from 'react';
import { format } from 'date-fns';
import Modal from '../../UI/Modal/Modal';
import Planet from '../Planet/Planet';
import './User.css';

class User extends Component {
  state = {};
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
          <a>View</a>
        </div>
        <Modal>
          <Planet url={userInfo.homeworld} />
        </Modal>
      </div>
    );
  }
}

export default User;
