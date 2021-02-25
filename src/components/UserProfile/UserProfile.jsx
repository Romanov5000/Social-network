import React, { useEffect, useCallback } from "react";
import style from "./UserProfile.module.css";
import PublicationInput from "./PublicationInput";
import { useDispatch, useSelector } from "react-redux";
import { setProfilePageAction, putProfilePhotoAction } from "../../actions/ProfilePageAction";
import { useParams } from "react-router-dom";
import UserPage from "./UserPage";
import { setStatusAction, putStatusAction } from "../../actions/statusAction";

const UserProfile = () => {
  const { id } = useParams();
  const userProfileInfo = useSelector((state)=>state.userInfo);
  const userStatusInfo = useSelector((state)=>state.status);
  const ownId = useSelector((state)=>state.initial.id);
  const dispatch = useDispatch();

  let {
    fullName,
    lookingForAJobDescription,
    contacts,
    photos,
    aboutMe,
  } = userProfileInfo;

  const incrementPutStatus = useCallback(
    (status) => dispatch(putStatusAction(status)),
    [dispatch]
  )
  const incrementPutProfilePhoto = useCallback(
    (profilePhoto) => dispatch(putProfilePhotoAction(profilePhoto)),
    [dispatch]
  )

  useEffect(() => {
    dispatch(setProfilePageAction(id));
    dispatch(setStatusAction(id));
  }, [id, photos]);

  
  let hereOwner = ownId==id? true : false;
  
  return (
    <section className={style.UserProfile}>
      <UserPage
        fullName={fullName}
        lookingForAJobDescription={lookingForAJobDescription}
        contacts={contacts}
        photos={photos}
        aboutMe={aboutMe}
        hereOwner={hereOwner}
        userStatusInfo={userStatusInfo}
        putStatusAction={incrementPutStatus}
        putProfilePhotoAction={incrementPutProfilePhoto}
      />
      {hereOwner && <PublicationInput />}
    </section>
  );
};


export default UserProfile;
