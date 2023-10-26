import React, { lazy, Suspense, useState } from 'react'; // Must be imported for webpack to work
import './App.css';

const Chat = lazy(() => import('ChatApp/Chat'));
const Calendar = lazy(() => import('CalendarApp/Calendar'));

function App() {
  const [users, setUsers] = useState();
  const [invites, setInvites] = useState();
  setTimeout(async()=>{
    // loading users data
    const users = await import('./mockData/users.json')
    setUsers(users.users)
  }, 2000);

  setTimeout(async()=>{
    // loading users data
    const calendarInvites = await import('./mockData/calendar.json')
    setInvites(calendarInvites.invites)
  }, 2000);
  return (
    <>
    <header>
      <span className='logo'>Gmail App</span>
      <div className='searchDiv' ><input className='searchbar'placeholder='Search Emails'></input></div>
      <span className='profile'>Profile</span>
    </header>
    <div className="App">
      <Suspense fallback={<div>Loading Chat...</div>}>
        <Chat users={users}/>
      </Suspense>
      <div className="container">Gmail home page</div>
      <Suspense fallback={<div>Loading Chat...</div>}>
        <Calendar invites={invites} />
      </Suspense>
    </div>
    </>
  );
}

export default App;