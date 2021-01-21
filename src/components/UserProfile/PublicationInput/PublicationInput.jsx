import React, { useState } from "react";
import style from "./PublicationInput.module.css";
import PublicationsList from "../PublicationsList";
import { connect } from "react-redux";
import { actionNewPost } from "../../../actions/actionNewPost";
import InputForm from '../../InputForm';

const PublicationInput = (props) => {
  const {actionNewPost, publications} = props;

  return (
    <div className={style.PublicationInput}>
      <InputForm setPublication={actionNewPost} />
      <PublicationsList publications={publications} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    publications: state.publications,
  };
};

export default connect(mapStateToProps, {actionNewPost})(PublicationInput);
