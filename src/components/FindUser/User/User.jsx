import React from "react";
import style from "./User.module.css";


export default function User (props) {
  const { name, id, follow, photos, setFollow } = props;
   let followBtn = follow? 'unfollow': 'follow';
   let userPhoto = photos.small? photos.small : 'https://idelio.ru/admin/img/man.png';

  return (
    <div key={id} className={style.user}>
        <img src={userPhoto} alt="logo"/>
      <p>{name}</p>
      <button onClick={()=>setFollow(id)}>{followBtn}</button>
    </div>
  );
};

