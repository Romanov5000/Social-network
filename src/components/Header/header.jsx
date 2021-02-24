import React, { useEffect } from "react";
import style from "./header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setProfilePageAction } from "../../actions/getInitialAction";
import { NavLink } from "react-router-dom";
import { deleteUserLogin } from "../../actions/loginAction";

const Header = () => {
  
  const initial = useSelector((state)=>state.initial);
  const isAuth = useSelector((state)=>state.isAuth);
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(setProfilePageAction());
  }, [isAuth]);
  let checkUser = isAuth ? (
    <div>
      <div>{initial.login}</div>
      <button onClick={() => dispatch(deleteUserLogin())}>logout</button>
    </div>
  ) : (
    <NavLink to="/Login">Login</NavLink>
  );

  return (
    <header className={style.Header}>
      <NavLink to={`/Profile/14286`}>
        <img
          src="https://cdn2.iconfinder.com/data/icons/random-set-1/467/Asset_79-512.png"
          alt="logo"
        />
      </NavLink>
      <div>{checkUser}</div>
    </header>
  );
};

export default Header;
