// import React from 'react';
// import { Redirect } from 'react-router-dom';
// import { connect } from "react-redux";

// export function withAuthRedurect ({ component: Component,  ...rest }) {
//     const RedirectComponent = (props) => {
    
//         if (!props.isAuth) return <Redirect to={'/Login'} />
//         return <Component {...props}/>

//     }
//     const ConnectedAuthRedirectComponent = connect (mapStateToProps)(RedirectComponent)

//     return ConnectedAuthRedirectComponent
// }
// const mapStateToProps = (state) => {
//   return {
//     isAuth: state.isAuth,
//   };
// };
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
const PrivateRoute = ({ component: Component,  ...rest })=> {
    return (
        <Route {...rest} render={props => {
            if (!rest.isAuth) {
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }
            // logged in so return component
            if(rest.isAuth){return <Component {...props} />}
        }} />
    );
};
const mapStateToProps = (state) => {
    return {
        isAuth: state.isAuth,
    };
};
export default connect(mapStateToProps)(PrivateRoute);