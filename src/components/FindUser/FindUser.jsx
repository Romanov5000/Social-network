import React from "react";
import style from "./FindUser.module.css";
import { connect } from "react-redux";
import User from "./User";

const FindUser = (props) => {
const {users} = props;

const usersList = users.map((item) => {
    return (
        <li key={item.id}>
            < User
            name = {item.name}
            id = {item.id}
            follow = {item.follow}
            />
        </li>
    )
})


  return (
      <ul>{usersList}</ul>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, null)(FindUser);
