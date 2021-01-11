import React from 'react';
import Header from '../Header';
import UserProfile from '../UserProfile';
import style from './App.module.css';
import NavBar from '../NavBar';
import Messages from '../Messages';
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className={style.App}>
      <Header />
      <div className={style.container}>
      <NavBar />
      <Switch>
      <Route path='/profile' component={UserProfile}/>
      <Route path='/messages' component={Messages}/>
      </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;