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
        <a href={contacts.github} target="_blank">Github</a>
        <a href={contacts.website} target="_blank">Portfolio</a>
        <a href={contacts.mainLink} target="_blank">Linkedin</a>
      </div>
    ) : (
      "User doesn't have social networks"
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
      {hereOwner && (
        <UserStatus text={userStatusInfo} putStatusAction={putStatusAction} />
      )}
      <div>
        <p>About me: {abtMe}</p>
        <p>Work status: {jobStatus}</p>
        {SocNetBlock}
      </div>
    </div>
  );
});
export default UserPage;
