import React from "react";
import style from "./User.module.css";
import { NavLink } from "react-router-dom";

export default function User(props) {
  const { name, id, follow, photos, postUserFollow, deleteUserFollow } = props;
  let followBtn = follow ? "unfollow" : "follow";
  let userPhoto = photos.small
    ? photos.small
    : "https://idelio.ru/admin/img/man.png";

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
