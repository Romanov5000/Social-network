import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component,  ...rest })=> {
    const isAuth = useSelector((state) => state.isAuth);

    return (
        <Route {...rest} render={props => {
            if (!isAuth) {
                return <Redirect to={ '/login'} />
            }
            // logged in so return component
            if(isAuth){return <Component {...props} />}
        }} />
    );
};

export default PrivateRoute;