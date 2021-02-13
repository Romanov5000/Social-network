import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { postUserLogin } from "../../actions/loginAction";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  const isAuth = useSelector((state) => state.isAuth);

  if (isAuth) return <Redirect to={"/News"} />;
  return (
    <div>
      <h1>Login</h1>
      <UserSearchForm />
    </div>
  );
};

const UserSearchForm = () => {
  const dispatch = useDispatch();
  const validateForm = (values) => {
    const errors = {};

    return errors;
  };

  const onSubmitForm = (values) => {
    let { email, password, rememberMe } = values;
    dispatch(postUserLogin(email, password, rememberMe));
  };
  return (
    <Formik
      initialValues={{ email: "", password: "", rememberMe: false }}
      validate={validateForm}
      onSubmit={onSubmitForm}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <Field type="login" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <Field type="checkbox" name="rememberMe" />
            Remember me
            <ErrorMessage name="rememberMe" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
