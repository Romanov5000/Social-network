import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

export default function InputForm(props) {
  const [newPost, setNewPost] = useState("");

  const inputText = (event) => {
    if (event.target.value !== "") {
      setNewPost((newPost) => event.target.value);
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
    props.setPublication(newPost);
    setNewPost((newPost) => "");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Input
          placeholder="What's new?"
          value={newPost}
          onChange={inputText}
          style={{ width: "33rem" }}
        />
        <Button onClick={onSubmit}>click</Button>
      </form>
    </div>
  );
}
