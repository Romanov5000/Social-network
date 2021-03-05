import React, { useEffect } from "react";
import style from "./header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setInitialPageAction } from "../../actions/getInitialAction";
import { setMyOwnProfilePageAction } from "../../actions/ProfilePageAction";
import { NavLink } from "react-router-dom";
import { deleteUserLogin } from "../../actions/loginAction";
import NavBar from "../NavBar";
import Button from '@material-ui/core/Button';


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
      <Button onClick={() => dispatch(deleteUserLogin())}>logout</Button>
    </div>
  ) : ( <div className={style.loginBtn}>
    <NavLink to="/Login" ><Button >Login</Button></NavLink>
    </div>
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
