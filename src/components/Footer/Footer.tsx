import React from "react";
import classes from "./Footer.module.css";
import classContainer from "../../common/styles/Container.module.css";

const Footer = () => {
  return (
    <div className={classes.footerBlock}>
      <div className={classContainer.container}>
        <div className={classes.wrapInformation}>
          <div className={classes.name}>Dmitry Smolin</div>
          <div className={classes.blockItems}>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
          </div>
          <div className={classes.footerText}>©2020 Copyright all rights reserved</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
