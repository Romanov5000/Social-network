import React from "react";
import Spinner from "../../Spinner";
import UserStatus from "../UserStatus";

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
        <a href={contacts.facebook}>Facebook</a>
        <a href={contacts.github}>github</a>
        <a href={contacts.twitter}>twitter</a>
        <a href={contacts.instagram}>instagram</a>
      </div>
    ) : (
      ""
    );
  const onProfilePhotChek = (e) => {
    if (e.target.files.length) {
      putProfilePhotoAction(e.target.files[0]);
    }
  };

  if (!fullName) {
    return <Spinner />;
  }

  return (
    <div>
      <div>
        <img src={avatar} alt="userAvatar" />
        <p>{fullName}</p>
        {hereOwner && <input type="file" onChange={onProfilePhotChek} />}
      </div>
      <UserStatus text={userStatusInfo} putStatusAction={putStatusAction} />
      <div>
        <p>About me: {abtMe}</p>
        <p>Work status: {jobStatus}</p>
        {SocNetBlock}
      </div>
    </div>
  );
});
export default UserPage;
