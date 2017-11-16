import React from 'react';
import User from './User';

const UserList = props => {
  return <div>{props.users.map(user => <User userInfo={user} />)}</div>;
};

export default UserList;
