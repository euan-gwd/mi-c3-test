import React from 'react';

const User = ({ userInfo }) => {
  return (
    <div>
      <div>Name:{userInfo.name}</div>
      <div>Height:{userInfo.height}</div>
      <div>Mass:{userInfo.mass}</div>
      <div>created:{userInfo.created}</div>
      <div>edited:{userInfo.edited}</div>
      <a linkto={userInfo.homeworld}>HomeWorld</a>
    </div>
  );
};

export default User;
