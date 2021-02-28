import React from 'react';
import './AllUsers.css'
const AllUsers = (props) => {
  const { name, email, image, salary } = props.people;
  return (
    <div className="user">
      <div>
        <img src={image} alt="user img " />
        <h3>{name}</h3>
        <p>{email}</p>
        <h4>{salary}</h4>
        <button onClick={() => props.handleAddFriend(props.people)}>Add friend</button>
      </div>
    </div>
  );
};

export default AllUsers;