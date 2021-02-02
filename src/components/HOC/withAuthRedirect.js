
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

const mapStateToPropsRedirect = (state) => {
  return {
    isAuth: state.isAuth,
  };
};

export function withAuthRedurect (Component) {

    const RedirectComponent = (props) => {

        if (!props.isAuth) return <Redirect to={'/Login'} />
        return <Component {...props}/>

    }

    const ConnectedAuthRedirectComponent = connect (mapStateToPropsRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}