import React from 'react';
import { format } from 'date-fns';
import './User.css';

const User = ({ userInfo }) => {
  return (
    <div className="grid-table-data">
      <div>{userInfo.name}</div>
      <div>{userInfo.height}cm</div>
      <div>{userInfo.mass}kg</div>
      <div>{format(userInfo.created, 'DD/MM/YYYY HH:mm:ss')}</div>
      <div>{format(userInfo.edited, 'DD/MM/YYYY HH:mm:ss')}</div>
      <a link={userInfo.homeworld}>View</a>
    </div>
  );
};

export default User;
