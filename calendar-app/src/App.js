import React from 'react'; // Must be imported for webpack to work
import './App.css';

function App(props) {
  const handleClick = (invite) => {
    console.log('Invite Clicked -> ',invite)
  }
  const invites= props.invites?.map(invite => {
    return <div onClick={()=> handleClick(invite)} className={"chatRow"} key={invite.id}>
      {invite.title}
      </div>
  })
  return (
    <div className="CalendarApp">
      <div>Calendar</div>
      {invites}
    </div>
  );
}

export default App;
