import React from "react";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";



export default function NavBar(props) {
  return (
    <section className={style.NavBar}>
      <NavLink to="/Profile" activeClassName={style.active}>
      <li>Profile</li>
      </NavLink>
      <NavLink to="/Messages" activeClassName={style.active}>
      <li>Messages</li>
      </NavLink>
      <NavLink to="/News" activeClassName={style.active}>
      <li>News</li>
      </NavLink>
      <NavLink to="/Music" activeClassName={style.active}>
      <li>Music</li>
      </NavLink>
      <NavLink to="/FindUser" activeClassName={style.active}>
      <li>FindUser</li>
      </NavLink>
      <NavLink to="/Settings" activeClassName={style.active}>
      <li>Settings</li>
      </NavLink>
    </section>
  );
}
