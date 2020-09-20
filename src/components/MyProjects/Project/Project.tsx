import React from "react";
import classes from "./Project.module.css";

type ProjectPropsType = {
  id: string;
  title: string;
  description: string;
  name: string;
};

const Project: React.FC<ProjectPropsType> = (props) => {
  return (
    <div className={classes.projectBlock}>
      <div className={classes.mainBlock}>
        <div className={classes.img}>Picture</div>
        <button>{props.title}</button>
      </div>
      <div className={classes.bottomBlock}>
        <div className={classes.nameProject}>
          <span>{props.name}</span>
        </div>
        <div className={classes.description}>
          <span>{props.description}</span>
        </div>
      </div>
    </div>
  );
};

export default Project;
