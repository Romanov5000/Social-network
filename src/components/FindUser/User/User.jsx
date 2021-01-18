import React from "react";
import style from "./User.module.css";
import { connect } from "react-redux";
import {AddOrDeleteUser} from "../../../actions/actionAddOrDeleteUser";

const User = (props) => {
  const { name, id, follow } = props;
   let followBtn = (follow)? 'unfollow': 'follow';

  return (
    <div key={id}>
      <p>{name}</p>
      <button onClick={()=>props.setFollow(id)}>{followBtn}</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
    setFollow: (id) => dispatch(AddOrDeleteUser(id)),
  });
  
  export default connect(null, mapDispatchToProps)(User);
