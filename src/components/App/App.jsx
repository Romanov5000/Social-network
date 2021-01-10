import React from 'react';
import Header from '../Header';
import UserProfile from '../UserProfile';
import style from './App.module.css';

function App() {
  return (
    <div className={style.App}>
      <Header />
      <UserProfile />
    </div>
  );
}

export default App;
