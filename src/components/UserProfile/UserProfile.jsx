import React, { useEffect, useCallback } from "react";
import style from "./UserProfile.module.css";
import PublicationInput from "./PublicationInput";
import { useDispatch, useSelector } from "react-redux";
import { setProfilePageAction } from "../../actions/setProfilePageAction";
import { useParams } from "react-router-dom";
import UserPage from "./UserPage";
import { setStatusAction, putStatusAction } from "../../actions/statusAction";

const UserProfile = () => {
  const { id } = useParams();
  const userProfileInfo = useSelector((state)=>state.userInfo);
  const userStatusInfo = useSelector((state)=>state.status);
  const dispatch = useDispatch();

  const incrementPutStatus = useCallback(
    (status) => dispatch(putStatusAction(status)),
    [dispatch]
  )

  useEffect(() => {
    dispatch(setProfilePageAction(id));
    dispatch(setStatusAction(id));
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
        putStatusAction={incrementPutStatus}
      />
      <PublicationInput />
    </section>
  );
};


export default UserProfile;
