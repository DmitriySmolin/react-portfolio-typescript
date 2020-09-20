import React from "react";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={classes.navBlock}>
      <a href="#main">Главная</a>
      <a href="#skills">Скиллы</a>
      <a href="#projects">Проекты</a>
      <a href="#contacts">Контакты</a>
    </div>
  );
};

export default Nav;
