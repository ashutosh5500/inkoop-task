import React from "react";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../Backdrop/Backdrop";
import Button from "../../Button/Button"

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  const list = ["About", "Services", "Cuisine", "Gallery", "Contact", "Book"];
  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.MenuItems}>
          <ul>
            <li key={list}>
              {list.map((item) => {
                return <li key>{item}</li>;
              })}
            </li>
          </ul>
          <Button />
        </div>
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;
