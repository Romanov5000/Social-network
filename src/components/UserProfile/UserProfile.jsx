import React, { useEffect } from "react";
import style from "./UserProfile.module.css";
import PublicationInput from "./PublicationInput";
import { connect } from "react-redux";
import { setProfilePageAction } from "../../actions/setProfilePageAction";
import { useParams } from "react-router-dom";
import UserPage from "./UserPage";
import { withAuthRedurect } from "../HOC/withAuthRedirect";

const UserProfile = (props) => {
  const { id } = useParams();
  const { setProfilePageAction, userProfileInfo } = props;
  useEffect(() => {
    setProfilePageAction(id);
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
      />
      <PublicationInput />
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    userProfileInfo: state.userInfo,
  };
};

let AuthRedirectComponent = withAuthRedurect(UserProfile);

const WithUrlDataComtainerComponent = withAuthRedurect(AuthRedirectComponent);
export default connect(mapStateToProps, { setProfilePageAction })(
  WithUrlDataComtainerComponent
);
