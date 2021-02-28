import React from 'react';
import './FriendList.css'
const User = (props) => {
  const { name, image } = props.user;
  return (
    <div>
      <div className="friends">
        <div className="added">
          <img src={image} alt="" />
          <h6>{name}</h6>
        </div>
      </div>
    </div>
  );
};

export default User;