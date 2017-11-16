import React from 'react';
import './User.css';

const User = ({ userInfo }) => {
  return (
    <table className="">
      <th className="grid-table-data">
        <div>{userInfo.name}</div>
        <div>{userInfo.height}</div>
        <div>{userInfo.mass}</div>
        <div>{userInfo.created}</div>
        <div>{userInfo.edited}</div>
        <a linkto={userInfo.homeworld}>HomeWorld</a>
      </th>
    </table>
  );
};

export default User;
