import React from 'react';
import User from './User/User';
import './UserList.css';

const UserList = ({ users }) => {
  return (
    <div className="table">
      <div className="grid-table-headers">
        <div>Name</div>
        <div>Height</div>
        <div>Mass</div>
        <div>Created</div>
        <div>Edited</div>
        <div>Planet</div>
      </div>
      <div>{users.map(user => <User key={user.name} userInfo={user} />)}</div>
    </div>
  );
};

export default UserList;
