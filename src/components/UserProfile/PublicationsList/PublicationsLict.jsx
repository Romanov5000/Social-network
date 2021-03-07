import React from "react";
import style from "./PublicationsList.module.css";
import Button from "@material-ui/core/Button";

export default function PublicationsList(props) {
  const { publications, deletePublications } = props;

  const element = publications.map((item) => {
    return  item.text?(
      <div className={style.public} key={item.id}>
          <p>{item.text}</p>
          <div>
          <Button onClick={() => deletePublications(item.id)}>x</Button>
          </div>
      </div>
    ):undefined
  });
  return element;
}
