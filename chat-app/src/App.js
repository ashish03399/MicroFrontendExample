import React from 'react'; // Must be imported for webpack to work
import './App.css';

function App(props) {
  
  const handleClick = (user) => {
    console.log('User Clicked -> ',user)
  }
  const users= props.users?.map(user => {
    return <div onClick={()=> handleClick(user)} className={"chatRow"} key={user.id}>
      {user.name}
      </div>
  })

  return (
    <div className="ChatApp">
      <div>Chat</div>
      <div>
      {users}
      </div>
    </div>
  );
}

export default App;
