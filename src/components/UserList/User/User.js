import React from 'react';
import './User.css';

const User = ({ userInfo }) => {
  return (
    <div className="grid-table-data">
      <div>{userInfo.name}</div>
      <div>{userInfo.height}cm</div>
      <div>{userInfo.mass}kg</div>
      <div>{userInfo.created}</div>
      <div>{userInfo.edited}</div>
      <a linkto={userInfo.homeworld}>Planet of Origin</a>
    </div>
  );
};

export default User;
