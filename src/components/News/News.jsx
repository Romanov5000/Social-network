import React from "react";
import style from "./News.module.css";

const News = () => {
  return (
    <div className={style.news}>
      <h2>Hello my friend.</h2>
      <p>
        This is my pet-project, social network. Here I am practising and learning
        coding skills.
      </p>
      <p>
        You can look at its functionality and if you have any comments, write to
        me at Linkedin
      </p>
      <p>Happy using!</p>
    </div>
  );
};

export default News;
