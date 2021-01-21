import React from "react";
import style from "./MessageItem.module.css";
import InputForm from '../../InputForm';
import { connect } from "react-redux";
import { actionNewMessage } from "../../../actions/actionNewMessege";

const MessageItem = (props) => {
  const { dialogMessagesList, actionNewMessage } = props;

  const messages = dialogMessagesList.map((item) => (
    <div key={item.id}>{item.messageText}</div>
  ));
  return (
    <div className={style.MessageItem}>
      {messages}
      <InputForm setPublication={actionNewMessage} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dialogMessagesList: state.dialogMessagesList,
  };
};

export default connect(mapStateToProps, {actionNewMessage})(MessageItem);
