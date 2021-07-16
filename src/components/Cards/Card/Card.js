import React from "react";
import classes from "./Card.module.css";

const card = (props) => {
  const { title, source } = props;
  return (
    <div className={classes.Cards}>
      <img src={source} height="100px" width="100px" alt="Fast Food"/>
      <div className={classes.CardItems}>
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default card;
