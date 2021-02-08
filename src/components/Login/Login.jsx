import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Login = (props) => {
  return (
    <div>
      <h1>Login</h1>
      <UserSearchForm />
    </div>
  );
};

const UserSearchForm = () => {
  const validateForm = (values: any) => {
    const errors = {};
    return errors;
  };

  const onSubmitForm = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={validateForm}
      onSubmit={onSubmitForm}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <Field type="login" name="login" />
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
