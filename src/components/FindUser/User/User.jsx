import React from "react";
import style from "./User.module.css";
import { NavLink } from "react-router-dom";

export default function User(props) {
  const { name, id, follow, photos, postUserFollow, deleteUserFollow } = props;
  let followBtn = follow ? "unfollow" : "follow";
  let userPhoto = photos.small
    ? photos.small
    : "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png";

  return (
    <div key={id} className={style.user}>
      <NavLink to={`/Profile/${id}`}>
        <img src={userPhoto} alt="logo" />
      </NavLink>
      <p>{name}</p>
      <button onClick={ follow? ()=> deleteUserFollow(id) :
        () => postUserFollow(id)}>{followBtn}</button>
    </div>
  );
}
