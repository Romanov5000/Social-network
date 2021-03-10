import React from "react";
import Header from "../Header";
import UserProfile from "../UserProfile";
import style from "./App.module.css";
import Messages from "../Messages";
import FindUser from "../FindUser";
import PrivateRoute from "../HOC/PrivateRoute";
import Login from "../Login";
import News from "../News";
import Settings from "../Settings";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../reducer/MainReducer";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={style.container}>
          <Header />
          <Switch>
            <PrivateRoute path={`/Social-network/profile/:id?`} component={UserProfile} />
            <PrivateRoute path={`/Social-network/messages`} component={Messages} />
            <PrivateRoute path={`/Social-network/findUser`} component={FindUser} />
            <Route path="/Social-network/News" component={News} />
            <Route path="/Social-network/Settings" component={Settings} />
            <Route path="/Social-network" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
