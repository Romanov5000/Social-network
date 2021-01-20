import React, { useEffect } from "react";
import style from "./FindUser.module.css";
import { connect } from "react-redux";
import User from "./User";
import { setUsersAction } from "../../actions/setUsersAction";
import { AddOrDeleteUser } from "../../actions/actionAddOrDeleteUser";
import Paginator from "../Paginator";


const FindUser = (props) => {
  const { users, setFollow, setUsers } = props;

  useEffect(() => {
    setUsers();
  }, []);

  const usersList = users.map((item) => {
    return (
      <li key={item.id}>
        <User
          name={item.name}
          id={item.id}
          follow={item.follow}
          photos={item.photos}
          setFollow={setFollow}
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

const mapDispatchToProps = (dispatch) => ({
  setUsers: () => dispatch(setUsersAction()),
  setFollow: (id) => dispatch(AddOrDeleteUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FindUser);
