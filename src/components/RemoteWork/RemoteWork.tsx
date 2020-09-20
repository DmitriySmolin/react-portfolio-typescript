import React from "react";
import classes from "./RemoteWork.module.css";
import classContainer from "../../common/styles/Container.module.css";

const RemoteWork = () => {
  return (
    <div className={classes.RemoteWorkBlock}>
      <div className={classContainer.container}>
        <div className={classes.wrapInformation}>
          <div className={classes.wrapText}>Considering options for remote work</div>
          <button>Hire me</button>
        </div>
      </div>
    </div>
  );
};

export default RemoteWork;
