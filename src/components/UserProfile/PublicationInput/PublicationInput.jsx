import React, { useState } from "react";
import style from "./PublicationInput.module.css";
import PublicationsList from "../PublicationsList";
import { connect } from "react-redux";

const PublicationInput = (props) => {
  const [count, setCount] = useState("");
  const [idd, setId] = useState(0);

  const { setPublication } = props;
  const inputText = (event) => {
    setCount((count) => event.target.value);
  };

  const addPublication = (event) => {
    if (count !== "") {
      const post = {
        text: count,
        id: idd,
      };
      setId((idd) => idd + 1);
      setPublication(post);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setCount((count) => "");
  };

  return (
    <div className={style.PublicationInput}>
      <form onSubmit={onSubmit}>
        <input value={count} onChange={inputText} />
        <button onClick={addPublication}>klick</button>
      </form>
      <PublicationsList />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setPublication: (post) =>
    dispatch({
      type: "IS_PUBLICATIONS",
      payload: post,
    }),
});

export default connect(null, mapDispatchToProps)(PublicationInput);
