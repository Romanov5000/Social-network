import React from "react";
import Spinner from "../../Spinner";
import UserStatus from "../UserStatus";
import UploadButtons from "./UploadButtons";
import style from "./UserPage.module.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

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

  const avatar =
    photos && photos.large ? (
      <img src={photos.large} alt="userAvatar" />
    ) : (
      <img
        className={style.notUserAvata}
        src={
          "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
        }
        alt="userAvatar"
      />
    );

  const abtMe = aboutMe ? aboutMe : "I'm funny";
  const jobStatus = lookingForAJobDescription ? (
    lookingForAJobDescription
  ) : (
    <span>looking for a job</span>
  );
  const notUserStyle = photos && photos.large
    ? `${style.ownUserStyle}`
    : `${style.notUserStyle}`;
  const SocNetBlock =
    contacts && contacts.github ? (
      <div>
        <a href={contacts.github} target="_blank" className={style.socLink}>
          <GitHubIcon />
          Github
        </a>
        <a href={contacts.website} target="_blank" className={style.socLink}>
          <WorkOutlineIcon />
          Portfolio
        </a>
        <a href={contacts.mainLink} target="_blank" className={style.socLink}>
          <LinkedInIcon />
          Linkedin
        </a>
      </div>
    ) : (
      <div className={style.socText}>User doesn't have social networks</div>
    );

  if (!fullName) {
    return <Spinner />;
  }

  return (
    <div className={style.userPage}>
      <div className={style.container}>
        <div className={notUserStyle}>
          {avatar}
          {hereOwner && (
            <UploadButtons putProfilePhotoAction={putProfilePhotoAction} />
          )}
        </div>
        <div className={style.userInfo}>
          <p className={style.userName}>{fullName}</p>
          <UserStatus
            text={userStatusInfo}
            putStatusAction={putStatusAction}
            hereOwner={hereOwner}
          />
          {SocNetBlock}
        </div>
      </div>
      <div className={style.aboutMeInfo}>
        <p>About me: {abtMe}</p>
        <p>Work status: {jobStatus}</p>
      </div>
    </div>
  );
});
export default UserPage;
