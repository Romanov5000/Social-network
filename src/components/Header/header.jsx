import React, {useEffect} from "react";
import style from "./header.module.css";
import { connect } from "react-redux";
import { setProfilePageAction } from "../../actions/getInitialAction";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const { initial, isAuth } = props;
  useEffect(() => {
    props.setProfilePageAction();
  }, []);
  let checkUser = isAuth ? 
    initial.login : 
    <NavLink to="/Login">
      Login
    </NavLink>;

  return (
    <header className={style.Header}>
      <NavLink to={`/Profile/14286`}>
      <img
        src="https://cdn2.iconfinder.com/data/icons/random-set-1/467/Asset_79-512.png"
        alt="logo"
      />
      </NavLink>
      <div>
        {checkUser}
      </div>
    </header>
  );
};
const mapStateToProps = (state) => {
  return {
    initial: state.initial,
    isAuth: state.isAuth,
  };
};

export default connect(mapStateToProps, { setProfilePageAction })(Header);
