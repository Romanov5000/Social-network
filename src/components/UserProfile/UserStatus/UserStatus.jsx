import React, { useState } from "react";
import style from "./UserStatus.module.css";
import Input from "@material-ui/core/Input";

export default function UserStatus(props) {
  let userStatusText = !props.text ? "status free" : props.text;
  const [statusForm, setStatusForm] = useState(false);
  const [statusText, setStatusText] = useState(userStatusText);
  const hereOwner = props.hereOwner;
  const statusStyle = hereOwner
    ? `${style.status} ${style.ownStatus}`
    : `${style.status}`;

  const ubdateStatusText = (event) => {
    setStatusText((statusText) => event.target.value);
  };
  const ubdateStatusForm = (props) => {
    if (hereOwner) setStatusForm((statusForm) => !statusForm);
  };
  const onSubmit = (event) => {
    props.putStatusAction(statusText);
    ubdateStatusForm();
  };

  let userStatusForm = !statusForm ? (
    <div onClick={ubdateStatusForm} className={statusStyle}>
      {userStatusText}
      {hereOwner && <span className={style.helper}>click to change</span>}
    </div>
  ) : (
    <form onSubmit={onSubmit} className={style.changeStatus}>
      <Input
        onBlur={ubdateStatusForm}
        autoFocus={true}
        value={statusText}
        onChange={ubdateStatusText}
      />
    </form>
  );

  return <>{userStatusForm}</>;
}
