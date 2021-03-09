import React from "react";
import style from "./User.module.css";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function User(props) {
  const { name, id, follow, photos, postUserFollow, deleteUserFollow } = props;
  let followBtn = follow ? "unfollow" : "follow";
  let userPhoto = photos.large
    ? photos.large
    : "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png";

  return (
    <div key={id} className={style.user}>
      <div className={style.userAvatar}>
        <NavLink to={`/Profile/${id}`}>
          <img src={userPhoto} alt="logo" />
        </NavLink>
      </div>
      <div className={style.followBlk}>
        <p>{name}</p>
        <Button
          onClick={
            follow ? () => deleteUserFollow(id) : () => postUserFollow(id)}>
          {followBtn}
        </Button>
      </div>
    </div>
  );
}
