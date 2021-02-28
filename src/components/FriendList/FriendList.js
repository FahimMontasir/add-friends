import React from 'react';
import User from './User';
import './FriendList.css'
const FriendList = (props) => {
  const userArr = props.user;
  return (

    <div>
      <h4>your added friends({userArr.length})</h4>
      <div className="all-user">
        {
          userArr.map(user => <User key={user.id} user={user}></User>)
        }
      </div>
    </div>
  );
};

export default FriendList;