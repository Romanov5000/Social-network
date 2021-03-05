import React from "react";
import Spinner from "../../Spinner";
import UserStatus from "../UserStatus";
import UploadButtons from "./UploadButtons";
import style from "./UserPage.module.css";

const UserPage = React.memo((props) => {
  let {
    fullName,
    lookingForAJobDescription,
    contacts,
    photos,
    aboutMe,
    hereOwner,
    userStatusInfo,
    putStatusAction,
    putProfilePhotoAction,
  } = props;

  let avatar =
    photos && photos.large
      ? photos.large
      : "https://cdn.iconscout.com/icon/free/png-512/speak-1659467-1409989.png";

  let abtMe = aboutMe ? aboutMe : "I'm funny";
  let jobStatus = lookingForAJobDescription ? (
    lookingForAJobDescription
  ) : (
    <span>looking for a job</span>
  );
  let SocNetBlock =
    contacts && contacts.github ? (
      <div>
        <a href={contacts.github} target="_blank">
          Github
        </a>
        <a href={contacts.website} target="_blank">
          Portfolio
        </a>
        <a href={contacts.mainLink} target="_blank">
          Linkedin
        </a>
      </div>
    ) : (
      "User doesn't have social networks"
    );

  if (!fullName) {
    return <Spinner />;
  }

  return (
    <div className={style.userPage}>
      <div className={style.container}>
        <div>
          <img src={avatar} alt="userAvatar" />
          {hereOwner && (
            <UploadButtons putProfilePhotoAction={putProfilePhotoAction} />
          )}
        </div>
        <div>
          <p>{fullName}</p>
          {hereOwner && (
            <UserStatus
              text={userStatusInfo}
              putStatusAction={putStatusAction}
            />
          )}
        </div>
      </div>
      <div>
        <p>About me: {abtMe}</p>
        <p>Work status: {jobStatus}</p>
        {SocNetBlock}
      </div>
    </div>
  );
});
export default UserPage;
