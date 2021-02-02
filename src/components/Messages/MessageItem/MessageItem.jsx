import React from "react";
import style from "./MessageItem.module.css";
import InputForm from "../../InputForm";

export default function MessageItem(props) {
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
}
