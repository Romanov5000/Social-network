import React, { useState } from "react";
import style from "./PublicationsList.module.css";
import { connect } from "react-redux";

const PublicationsList = (props) => {
  const { publications } = props;

  const element = publications.map((item) => {
    return <p key={item.id}>{item.text}</p>;
  });
  return <div className={style.PublicationsList}>{element}</div>;
};
const mapStateToProps = (state) => {
  return {
    publications: state.publications,
  };
};

export default connect(mapStateToProps)(PublicationsList);
