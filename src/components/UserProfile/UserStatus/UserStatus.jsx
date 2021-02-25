import React, { useState } from "react";

export default function UserStatus(props) {
  let userStatusText = !props.text ? "status free" : props.text;
  const [statusForm, setStatusForm] = useState(false);
  const [statusText, setStatusText] = useState(userStatusText);

  const ubdateStatusText = (event) => {
      setStatusText((statusText) => event.target.value);
  };
  const ubdateStatusForm = (props) => {
    setStatusForm((statusForm) => !statusForm);
  };

  const onSubmit = (event) => {
    props.putStatusAction(statusText);
    ubdateStatusForm();
  };

  let userStatusForm = !statusForm ? (
    <div onClick={ubdateStatusForm}>{statusText}</div>
  ) : (
    <div>
      <form onSubmit={onSubmit}>
        <input
          autoFocus={true}
          value={statusText}
          onChange={ubdateStatusText}
        />
      </form>
    </div>
  );

  return <>{userStatusForm}</>;
}
