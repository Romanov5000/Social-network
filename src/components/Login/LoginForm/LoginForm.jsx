import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { postUserLogin } from "../../../actions/loginAction";
import { useDispatch } from "react-redux";

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
            <Field type="login" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <Field type="checkbox" name="rememberMe" />
            Remember me
            <ErrorMessage name="rememberMe" component="div" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default UserSearchForm;