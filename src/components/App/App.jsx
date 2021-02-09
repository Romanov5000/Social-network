// import React from "react";
// import Header from "../Header";
// import UserProfile from "../UserProfile";
// import style from "./App.module.css";
// import NavBar from "../NavBar";
// import Messages from "../Messages";
// import FindUser from "../FindUser";
// import Login from "../Login";
// import { Switch, Route, BrowserRouter } from "react-router-dom";


// function App() {
//   return (
//     <BrowserRouter>
//       <div className={style.App}>
//         <Header />
//         <div className={style.container}>
//           <NavBar />
//           <Switch>
//             <Route path={`/profile/:id?`}>
//               <UserProfile />
//             </Route>
//             <Route path="/messages">
//               <Messages />
//             </Route>
//             <Route path="/FindUser">
//               <FindUser />
//             </Route>
//             <Route path="/Login">
//               <Login />
//             </Route>
//           </Switch>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
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
function App() {
  return (
    <BrowserRouter>
      <div className={style.App}>
        <Header />
        <div className={style.container}>
          <NavBar />
            <Switch>
            <PrivateRoute path={`/profile/:id?`} component={UserProfile}/>
            <PrivateRoute path={`/messages`} component={Messages}/>
            <PrivateRoute path={`/findUser`} component={FindUser}/>
            <Route path="/Login" component={Login}/>
            </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
