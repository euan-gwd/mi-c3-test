import React from 'react';
import User from './User/User';

const UserList = props => {
  return <div>{props.users.map(user => <User key={user.name} userInfo={user} />)}</div>;
};

export default UserList;
