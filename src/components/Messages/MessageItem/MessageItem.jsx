import React, { useState } from "react";
import style from "./MessageItem.module.css";
import { connect } from "react-redux";
import { actionNewMessage } from "../../../actions/actionNewMessege";

const MessageItem = (props) => {
  const { dialogMessagesList } = props;
  const [message, SetMessege] = useState("");

  const messageText = (event) => {
    if (event.target.value !== "") {
      SetMessege((message) => event.target.value);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    SetMessege((message) => "");
  };

  const messages = dialogMessagesList.map((item) => (
    <div key={item.id}>{item.messageText}</div>
  ));
  return (
    <div className={style.MessageItem}>
      {messages}
      <form onSubmit={onSubmit}>
        <input value={message} onChange={messageText} />
        <button onClick={() => props.setMessage(message)}>vvv</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dialogMessagesList: state.dialogMessagesList,
  };
};
const mapDispatchToProps = (dispatch) => ({
  setMessage: (message) => dispatch(actionNewMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageItem);
