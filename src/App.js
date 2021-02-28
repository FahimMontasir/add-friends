
import { useState } from 'react';
import './App.css';
import AllUsers from './components/AllUsers/AllUsers';
import FriendList from './components/FriendList/FriendList';
import fakeData from './fakeData';

function App() {
  const data = fakeData.slice(0, 15);
  const [user, setUser] = useState([]);
  const handleAddFriend = (added) => {
    const addedUser = [...user, added];
    setUser(addedUser)
  }
  return (
    <div>
      <h1 className="title">You may know this people</h1>
      <div className="all">
        <div className="display-user">
          {
            data.map(people => <AllUsers handleAddFriend={handleAddFriend} key={people.id} people={people}></AllUsers>)
          }
        </div>
        <div className="addedFriends">
          <FriendList user={user}></FriendList>
        </div>
      </div>
    </div>

  )
}

export default App;
