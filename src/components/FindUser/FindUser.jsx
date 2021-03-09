import React, { useEffect, useCallback } from "react";
import style from "./FindUser.module.css";
import { useDispatch, useSelector } from "react-redux";
import User from "./User";
import { setUsersAction } from "../../actions/setUsersAction";
import Paginator from "../Paginator";
import Spinner from "../Spinner";
import { postUserFollow, deleteUserFollow } from "../../actions/userFollow";


const FindUser = () => {
 
  const users = useSelector((state)=>state.users);
  const dispatch = useDispatch();
  const incrementPostFollow = useCallback(
    (id) => dispatch(postUserFollow(id)),
    [dispatch]
  )
  const incrementDeleteFollow = useCallback(
    (id) => dispatch(deleteUserFollow(id)),
    [dispatch]
  )

  useEffect(() => {
    dispatch(setUsersAction());
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
          postUserFollow={incrementPostFollow}
          deleteUserFollow={incrementDeleteFollow}
        />
      </li>
    );
  });

  return (
    <div className={style.findUser}>
      <ul>{usersList}</ul>
      <Paginator onPaginatorPage={setUsersAction} />
    </div>
  );
};


export default FindUser;
