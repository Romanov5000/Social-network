import React from "react";
import style from "./Settings.module.css";
import BuildIcon from "@material-ui/icons/Build";

const Settings = () => {
  return (
    <div className={style.settings}>
      <h2>
        <BuildIcon /> The page is under revision
      </h2>
    </div>
  );
};

export default Settings;
