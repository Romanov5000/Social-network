import React from "react";
import {useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import UserSearchForm from './LoginForm/LoginForm';
import style from './Login.module.css';

const Login = (props) => {
  const isAuth = useSelector((state) => state.isAuth);
  const isAuthError = useSelector((state) => state.isAuthError);

  let loginError = isAuthError? <div>Login or password is incorrect</div> : null;

  if (isAuth) return <Redirect to={"/News"} />;
  return (
    <div className={style.loginContainer}>
      <h1>Login</h1>
      <UserSearchForm />
      {loginError}
    </div>
  );
};

export default Login;
