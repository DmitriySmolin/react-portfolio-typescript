import React from "react";
import classes from "./MyProjects.module.css";
import classContainer from "../../common/styles/Container.module.css";
import { v1 } from "uuid";
import Project from "./Project/Project";

const MyProjects = () => {
  const projects = [
    {
      id: v1(),
      title: "Show",
      name: "Project name",
      description: "Short description",
    },
    {
      id: v1(),
      title: "Show",
      name: "Project name",
      description: "Short description",
    },
  ];
  return (
    <div className={classes.projectsBlock}>
      <div className={`${classContainer.container} ${classes.projectsContainer}`}>
        <h2 className={classes.title}>Projects</h2>
        <div className={classes.projects}>
          {projects.map((project) => (
            <Project
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              name={project.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
