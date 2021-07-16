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
          <h1 className={classes.Logo}>Foodie</h1>
          <ul>
            {list.map((item, index) => {
              return (
                <li key={item}>
                  <span style={{ position: "relative" }}>
                    {(index === 0) && <div className={classes.CancelledText}/>}
                    {item}
                  </span>
                </li>
              );
            })}
          </ul>
          <Button />
        </div>
      ) : (
        <div className={classes.MobMenu}>
          <DrawerToggle clicked={props.drawerToggleClicked} />
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
