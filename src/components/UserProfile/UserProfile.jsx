import React, { useEffect } from "react";
import style from "./UserProfile.module.css";
import PublicationInput from "./PublicationInput";
import { connect } from "react-redux";
import { setProfilePageAction } from "../../actions/setProfilePageAction";
import { useParams } from "react-router-dom";
import UserPage from "./UserPage";
// import PrivateRoute from "../HOC/PrivateRoute";
import { setStatusAction, putStatusAction } from "../../actions/statusAction";
import { compose } from "redux";

const UserProfile = (props) => {
  const { id } = useParams();
  const {
    setProfilePageAction,
    userProfileInfo,
    setStatusAction,
    userStatusInfo,
    putStatusAction,
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
  };
};

export default connect(mapStateToProps, {
  setProfilePageAction,
  setStatusAction,
  putStatusAction,
})(UserProfile);
