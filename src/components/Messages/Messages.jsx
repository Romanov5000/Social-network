import React from "react";
import style from "./Messages.module.css";
import Dialogs from "./Dialogs";
import MessageItem from "./MessageItem";
import { connect } from "react-redux";
import { actionNewMessage } from "../../actions/actionNewMessege";
import { withAuthRedurect } from "../HOC/withAuthRedirect";

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

let AuthRedirectComponent = withAuthRedurect(Messages);

const WithUrlDataComtainerComponent = withAuthRedurect(AuthRedirectComponent);
export default connect(mapStateToProps, { actionNewMessage })(
  WithUrlDataComtainerComponent
);
