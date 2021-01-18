import React from "react";
import style from "./PublicationsList.module.css";

export default function PublicationsList (props) {
  const { publications } = props;

  const element = publications.map((item) => {
    return <p key={item.id}>{item.text}</p>;
  });
  return <div className={style.PublicationsList}>{element}</div>;
};
