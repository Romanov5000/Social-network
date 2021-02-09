import React, { useEffect } from "react";
import style from "./UserProfile.module.css";
import PublicationInput from "./PublicationInput";
import { connect } from "react-redux";
import { setProfilePageAction } from "../../actions/setProfilePageAction";
import { useParams } from "react-router-dom";
import UserPage from "./UserPage";
import { withAuthRedurect } from "../HOC/withAuthRedirect";
import { setStatusAction, putStatusAction } from "../../actions/statusAction";
import { Redirect } from 'react-router-dom';

const UserProfile = (props) => {
  const { id } = useParams();
  const {
    setProfilePageAction,
    userProfileInfo,
    setStatusAction,
    userStatusInfo,
    putStatusAction,
    isAuth,
  } = props;

  useEffect(() => {
    setProfilePageAction(id);
    setStatusAction(id);
  }, [id]);

  let {
    fullName,
    lookingForAJobDescription,
    contacts,
    photos,
    aboutMe,
  } = userProfileInfo;

  
setTimeout(()=>{
  if (!props.isAuth) return <Redirect to={'/Login'} />
},2000)
  

  return (
    <section className={style.UserProfile}>
      <UserPage
        fullName={fullName}
        lookingForAJobDescription={lookingForAJobDescription}
        contacts={contacts}
        photos={photos}
        aboutMe={aboutMe}
        userStatusInfo={userStatusInfo}
        putStatusAction={putStatusAction}
      />
      <PublicationInput />
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    userProfileInfo: state.userInfo,
    userStatusInfo: state.status,
    isAuth: state.isAuth,
  };
};

export default connect(mapStateToProps, {
  setProfilePageAction,
  setStatusAction,
  putStatusAction,
})(UserProfile);
