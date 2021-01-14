import React from "react";
import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const Dialogs = (props) => {
  const { dialogNameList } = props;

  let messageList = dialogNameList.map((item) => {
    return (
      <div className={style.dialogItem} key={item.id}>
        <NavLink to={"/Messages/" + item.name}>{item.name}</NavLink>
      </div>
    );
  });
  return (
  <div className={style.dialogs}>{messageList}</div>)
};
const mapStateToProps = (state) => {
  return {
    dialogNameList: state.dialogNameList,
  };
};

export default connect(mapStateToProps)(Dialogs);
