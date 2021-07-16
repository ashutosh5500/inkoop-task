import classes from "./Cards.module.css";
import React from "react";
import HakkaNoodle from "../../assets/images/hakkanoodles.jpeg";
import { isMobile } from "../../utils/helper";
import Card from "./Card/Card";
import Mexican from "../../assets/images/mexican.jpeg";
import Nachos from "../../assets/images/nachos.jpeg";
import Burger from "../../assets/images/burger.jpeg";
import Pizza from "../../assets/images/pizza.jpeg";

const cards = () => {
  const cardItems = [
    {
      title: "Mexican Taco",
      source: Mexican,
    },
    {
      title: "Farmhouse Pizza",
      source: Pizza,
    },
    {
      title: "Chicken Burger",
      source: Burger,
    },
    {
      title: "Loaded Nachos",
      source: Nachos,
    },
  ];
  return (
    <div className={classes.row}>
      {cardItems.map((card) => {
        return <Card title={card.title} source={card.source} />;
      })}
      {!isMobile && (
        <div className={classes.Cards}>
          <img src={HakkaNoodle} height="100px" width="100px" alt="noodles" />
          <div className={classes.CardItems}>
            <h4>Hakka Noodles</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default cards;
