import React from "react";
import classes from "./Contacts.module.css";
import classContainer from "../../common/styles/Container.module.css";

const Contacts = () => {
  return (
    <div className={classes.contactsBlock}>
      <div className={classContainer.container}>
        <div className={classes.wrapInformation}>
          <div className={classes.contacts}>Contacts</div>
          <div className={classes.wrapForm}>
            <form className={classes.contactsForm}>
              <input type="text" placeholder="input" />
              <input type="text" placeholder="input" />
              <textarea name="" id="" placeholder="textarea"></textarea>
            </form>
          </div>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
