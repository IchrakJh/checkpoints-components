import logo from './logo.svg';
import './App.css';
import React,{component} from 'react';
import Adress from './Component/Profile/Address'
import FullName from './Component/Profile/FullName'
import ProfilePhoto from './Component/Profile/ProfilePhoto'


function App() {
  return (
    <div className="App">
      <>
      <FullName/>
      </>
      <>
      <ProfilePhoto/>
      </>
      <>
      <Adress/>
      </>

  </div>
  );
}

export default App;
