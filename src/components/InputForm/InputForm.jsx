import React, { useState } from "react";

export default function InputForm (props) {
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
    <div>
      <form onSubmit={onSubmit}>
        <input value={newPost} onChange={inputText} />
        <button onClick={() => props.setPublication(newPost)}>click</button>
      </form>
    </div>
  );
};
