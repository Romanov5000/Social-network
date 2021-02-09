import React, { useEffect } from "react";
import style from "./FindUser.module.css";
import { connect } from "react-redux";
import User from "./User";
import { setUsersAction } from "../../actions/setUsersAction";
import Paginator from "../Paginator";
import Spinner from "../Spinner";
import { postUserFollow, deleteUserFollow } from "../../actions/userFollow";
// import PrivateRoute from "../HOC/PrivateRoute";
import { compose } from "redux";

const FindUser = (props) => {
  const { users, postUserFollow, deleteUserFollow } = props;

  useEffect(() => {
    props.setUsersAction();
  }, []);

  if (!users.length) {
    return <Spinner />;
  }
  const usersList = users.map((item) => {
    return (
      <li key={item.id}>
        <User
          name={item.name}
          id={item.id}
          follow={item.followed}
          photos={item.photos}
          postUserFollow={postUserFollow}
          deleteUserFollow={deleteUserFollow}
        />
      </li>
    );
  });

  return (
    <div>
      <ul>{usersList}</ul>
      <Paginator onPaginatorPage={setUsersAction} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, {
  setUsersAction,
  postUserFollow,
  deleteUserFollow,
})(FindUser);
