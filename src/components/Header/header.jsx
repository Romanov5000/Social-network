import React, { useEffect } from "react";
import style from "./header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setInitialPageAction } from "../../actions/getInitialAction";
import { setMyOwnProfilePageAction } from "../../actions/ProfilePageAction";
import { NavLink } from "react-router-dom";
import { deleteUserLogin } from "../../actions/loginAction";
import NavBar from "../NavBar";

const Header = () => {
  const ownersInfo = useSelector((state) => state.ownersInfo);
  const ownId = useSelector((state) => state.initial.id);
  const isAuth = useSelector((state) => state.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInitialPageAction());
    if (ownId) dispatch(setMyOwnProfilePageAction(ownId));
  }, [isAuth]);
  let checkUser = isAuth ? (
    <div className={style.loginBtn}>
      <button onClick={() => dispatch(deleteUserLogin())}>logout</button>
    </div>
  ) : (
    <NavLink to="/Login" ><button className={style.loginBtn}>Login</button></NavLink>
  );
  return (
    <header className={style.Header}>
      {checkUser}
      { isAuth && <NavLink to={`/Profile/${ownId}`}>
        <div className={style.userBlk}>
          <img src={ownersInfo.photo} />
          <p>{ownersInfo.name}</p>
        </div>
      </NavLink>}
      <NavBar />
    </header>
  );
};

export default Header;
