import React from 'react';
import style from './UserProfile.module.css';
import PublicationInput from './PublicationInput';

export default function UserProfile() {
  return (
      <section className={style.UserProfile}>
        <div className={style.userInfo}>
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/speak-1659467-1409989.png"
            alt="userPhoto"
          />
          <div className={style.userDescrition}>
            <p>vvvvvvv</p>
            <p>bbbbbbbb</p>
            <p>dddddddd</p>
          </div>
        </div>
        <PublicationInput />
      </section>
  );
}
