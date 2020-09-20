import React from "react";
import classes from "./Skills.module.css";
import classContainer from "../../common/styles/Container.module.css";
import Skill from "./Skill/Skill";
import { v1 } from "uuid";

const Skills = () => {
  const skills = [
    {
      id: v1(),
      title: "JS",
      description: "Подробное описание навыка",
    },
    {
      id: v1(),
      title: "CSS",
      description: "Подробное описание навыка",
    },
    {
      id: v1(),
      title: "React",
      description: "Подробное описание навыка",
    },
  ];
  return (
    <div className={classes.skillsBlock}>
      <div className={`${classContainer.container} ${classes.skillsContainer}`}>
        <h2 className={classes.title}>Skills</h2>
        <div className={classes.skills}>
          {skills.map((skill) => (
            <Skill key={skill.id} id={skill.id} title={skill.title} description={skill.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
