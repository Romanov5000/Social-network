import React from "react";
import style from "./Messages.module.css";
import Dialogs from "./Dialogs";
import MessageItem from "./MessageItem";
import { connect } from "react-redux";
import { actionNewMessage } from "../../actions/actionNewMessege";
import { withAuthRedurect } from "../HOC/withAuthRedirect";
import { compose } from "redux";

const Messages = (props) => {
  const { dialogNameList, dialogMessagesList, actionNewMessage } = props;

  return (
    <section className={style.Messages}>
      <div>
        <Dialogs dialogNameList={dialogNameList} />
      </div>
      <MessageItem
        dialogMessagesList={dialogMessagesList}
        actionNewMessage={actionNewMessage}
      />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    dialogNameList: state.dialogNameList,
    dialogMessagesList: state.dialogMessagesList,
  };
};

export default compose(
  connect(mapStateToProps, { actionNewMessage }),
  withAuthRedurect
)(Messages);
