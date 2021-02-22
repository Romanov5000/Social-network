import React from "react";
import Header from "../Header";
import UserProfile from "../UserProfile";
import style from "./App.module.css";
import NavBar from "../NavBar";
import Messages from "../Messages";
import FindUser from "../FindUser";
import PrivateRoute from "../HOC/PrivateRoute";
import Login from "../Login";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../reducer/MainReducer";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={style.App}>
          <Header />
          <div className={style.container}>
            <NavBar />
            <Switch>
              <PrivateRoute path={`/profile/:id?`} component={UserProfile} />
              <PrivateRoute path={`/messages`} component={Messages} />
              <PrivateRoute path={`/findUser`} component={FindUser} />
              <Route path="" component={Login} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
