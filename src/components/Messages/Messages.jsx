import React, { useCallback } from "react";
import style from "./Messages.module.css";
import Dialogs from "./Dialogs";
import MessageItem from "./MessageItem";
import { useDispatch, useSelector } from "react-redux";

import { actionNewMessage } from "../../actions/actionNewMessege";

const Messages = () => {
  const dialogMessagesList = useSelector((state) => state.dialogMessagesList);
  const dialogNameList = useSelector((state) => state.dialogNameList);

  
const dispatch = useDispatch();
const newMessegeCounter = useCallback(
  (messege) => dispatch(actionNewMessage(messege)),
  [dispatch])


  return (
    <section className={style.Messages}>
      <div>
        <Dialogs dialogNameList={dialogNameList} />
      </div>
      <MessageItem
        dialogMessagesList={dialogMessagesList}
        actionNewMessage={newMessegeCounter}
      />
    </section>
  );
};


export default Messages;
