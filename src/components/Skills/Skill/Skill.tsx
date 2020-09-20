import React from "react";
import classes from "./Skill.module.css";

type SkillPropsType = {
  id: string;
  title: string;
  description: string;
};

const Skill: React.FC<SkillPropsType> = (props) => {
  return (
    <div className={classes.skillBlock}>
      <div className={classes.icon}></div>
      <h3>{props.title}</h3>
      <span className={classes.description}>{props.description}</span>
    </div>
  );
};

export default Skill;
