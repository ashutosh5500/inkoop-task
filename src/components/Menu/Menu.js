import React from "react";
import classes from "./Menu.module.css";
import Button from "../Button/Button";
import DrawerToggle from "./DrawerToggle/DrawerToggle";
import { isMobile } from "../../utils/helper";

const menu = (props) => {
  const list = ["About", "Services", "Cuisine", "Gallery", "Contact", "Book"];

  return (
    <div className={classes.Menu}>
      {!isMobile ? (
        <div className={classes.MenuItems}>
          <ul>
            <h1>Foodie</h1>
            <li key={list}>
              {list.map((item) => {
                return <li key>{item}</li>;
              })}
            </li>
          </ul>
          <Button />
        </div>
      ) : (
        <div className={classes.MobMenu}>
          <DrawerToggle clicked={props.drawerToggleClicked}/>
          <h1>Foodie</h1>
          <div>
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </div>
        </div>
      )}
    </div>
  );
};

export default menu;
