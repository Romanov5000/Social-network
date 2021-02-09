import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

export function withAuthRedurect (Component) {
    const RedirectComponent = (props) => {
    
        if (!props.isAuth) return <Redirect to={'/Login'} />
        return <Component {...props}/>

    }
    const ConnectedAuthRedirectComponent = connect (mapStateToProps)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.isAuth,
  };
};