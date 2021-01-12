import React from "react";
import style from "./MessageItem.module.css";
import { connect } from "react-redux";

const MessageItem = (props) => {
  const { dialogMessagesList } = props;
  const message = dialogMessagesList.map((item) => (
    <div key={item.id}>{item.text}</div>
  ));
  return <div className={style.MessageItem}>{message}</div>;
};
const mapStateToProps = (state) => {
  return {
    dialogMessagesList: state.dialogMessagesList,
  };
};

export default connect(mapStateToProps)(MessageItem);
