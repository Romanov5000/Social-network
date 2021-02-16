import React, { useCallback } from "react";
import style from "./PublicationInput.module.css";
import PublicationsList from "../PublicationsList";
import { useDispatch, useSelector } from "react-redux";
import { actionNewPost } from "../../../actions/actionNewPost";
import InputForm from "../../InputForm";

const PublicationInput = React.memo(() => {
  const publications = useSelector((state) => state.publications);
  const dispatch = useDispatch();
  const newPostCounter = useCallback((text) => dispatch(actionNewPost(text)), [
    dispatch,
  ]);

  return (
    <div className={style.PublicationInput}>
      <InputForm setPublication={newPostCounter} />
      <PublicationsList publications={publications} />
    </div>
  );
});


export default PublicationInput;
