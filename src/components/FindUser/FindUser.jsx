import React, { useEffect } from "react";
import style from "./FindUser.module.css";
import { connect } from "react-redux";
import User from "./User";
import { setUsersAction } from "../../actions/setUsersAction";
import { AddOrDeleteUser } from "../../actions/actionAddOrDeleteUser";
import Paginator from "../Paginator";
import Spinner from "../Spinner";

const FindUser = (props) => {
  const { users, AddOrDeleteUser } = props;

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
          follow={item.follow}
          photos={item.photos}
          AddOrDeleteUser={AddOrDeleteUser}
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
  AddOrDeleteUser,
})(FindUser);
