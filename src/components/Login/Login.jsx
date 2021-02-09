import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { postUserLogin } from "../../actions/loginAction";
import { useDispatch } from "react-redux";

const Login = (props) => {
  return (
    <div>
      <h1>Login</h1>
      <UserSearchForm />
    </div>
  );
};

const UserSearchForm = () => {
  const dispatch = useDispatch()
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
          <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
      )}
    </Formik>
  );
};
// const LoginForm = (props) => {
//   return (
//     <form >
//       <div>
//         <Field placeholder={"Login"} name={'login'} component={'input'}/>
//         <Field placeholder={"password"} name={'password'} component={'input'}/>
//         <Field type={"checkbox"} name={'rememberMe'} component={'input'}/> Remember me
//       </div>
//       <button>Log in</button>
//     </form>
//   );
// };

export default Login;
