import React from "react";
import Cards from "../Cards/Cards";
import classes from "./Main.module.css";
const main = () => {
  return (
    <div className={classes.Main}>
      <div className={classes.Content}>
        <h1>What are you having for lunch?</h1>
        <div className={classes.Article}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </p>
          <div className={classes.Underline}></div>
        </div>
      </div>
      <Cards />
      <div className={classes.ArticleMob}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className={classes.Underline}></div>
      </div>
    </div>
  );
};

export default main;
