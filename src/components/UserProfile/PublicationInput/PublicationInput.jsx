import React, { useState } from "react";
import style from "./PublicationInput.module.css";
import PublicationsList from "../PublicationsList";
import { connect } from "react-redux";
import { actionNewPost } from "../../../actions/actionNewPost";

const PublicationInput = (props) => {
  const [newPost, setNewPost] = useState("");

  const inputText = (event) => {
    if (event.target.value !== "") {
      setNewPost((newPost) => event.target.value);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setNewPost((newPost) => "");
  };

  return (
    <div className={style.PublicationInput}>
      <form onSubmit={onSubmit}>
        <input value={newPost} onChange={inputText} />
        <button onClick={() => props.setPublication(newPost)}>klick</button>
      </form>
      <PublicationsList />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setPublication: (newPost) => dispatch(actionNewPost(newPost)),
});

export default connect(null, mapDispatchToProps)(PublicationInput);
