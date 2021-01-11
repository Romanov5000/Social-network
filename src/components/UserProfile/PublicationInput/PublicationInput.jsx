import React, { useState } from "react";
import style from "./PublicationInput.module.css";
import PublicationsList from "../PublicationsList";

export default function PublicationInput() {
  const [count, setCount] = useState("");
  const [list, setList] = useState([]);
  const [idd, setId] = useState(0);

  const inputText = (event) => {
    setCount((count) => event.target.value);
  };

  const addPublication = (event) => {
    if (count !== "") {
      const obj = {
        text: count,
        id: idd,
      };
      setList((list) => [obj, ...list]);
      setId((idd) => idd + 1);
      // setCount((count) => "");
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setCount((count) => "");
  }

  return (
    <div className={style.PublicationInput}>
      <form onSubmit={onSubmit}>
        <input value={count} onChange={inputText} />
        <button onClick={addPublication}>klick</button>
      </form>
      <PublicationsList list={list} />
    </div>
  );
}