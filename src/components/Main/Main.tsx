import React from "react";
import classes from "./Main.module.css";
import classContainer from "../../common/styles/Container.module.css";

const Main = () => {
  return (
    <div className={classes.mainBlock}>
      <div className={classContainer.container}>
        <div className={classes.text}>
          <span>Hi There</span>
          <h1>
            I am <span>Dmitry Smolin</span>
          </h1>
          <p>Frontend Developer</p>
        </div>
        <div className={classes.photo}></div>
      </div>
    </div>
  );
};

export default Main;
