import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { postUserLogin } from "../../../actions/loginAction";
import { useDispatch } from "react-redux";
import style from "../Login.module.css";
import Button from '@material-ui/core/Button';

const UserSearchForm = () => {
  const dispatch = useDispatch();
  const validateLogin = (values) => {
    const errors = {};
    if (!values.email) errors.email = "Email is empty";
    if (!values.password) errors.password = "Password is empty";
    return errors;
  };

  const onSubmitForm = (values) => {
    let { email, password, rememberMe } = values;
    dispatch(postUserLogin(email, password, rememberMe));
  };
  return (
    <Formik
      initialValues={{ email: "", password: "", rememberMe: false }}
      onSubmit={onSubmitForm}
      validate={validateLogin}
    >
      {() => (
        <Form>
          <div>
            <div className={style.loginForm}>
              <Field placeholder="Email" type="login" name="email" />
            </div>
            <ErrorMessage
              className={style.loginError}
              name="email"
              component="div"
            />
            <div className={style.loginForm}>
              <Field placeholder="Password" type="password" name="password" />
            </div>
            <ErrorMessage
              className={style.loginError}
              name="password"
              component="div"
            />
            <div className={style.submitLogin}>
              <Button type="submit">Come in</Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UserSearchForm;
