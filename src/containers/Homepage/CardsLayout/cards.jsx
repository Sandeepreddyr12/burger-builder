import React from "react";
import classes from "./cards.module.css";
import Card from "./card/Card";

const Cards = () => {


  return (
    <div className={classes.container}>
      <h1 className={classes.header}>build the way u want</h1>
      <p className={classes.paragraph}>
        You don’t have to cook fancy or complicated masterpieces, <br /> just
        good food from fresh ingredients.
      </p>
      <div className={classes.cards}>
        <Card
          bgimage={"images/burgers/burgerimg1.jpg"}
          cardname="Burger Fusion"
        />
        <Card
          bgimage={"/images/sandwiches/sandwich1.jpg"}
          cardname="Sandwich Mama"
        />
        <Card bgimage={"/images/coffe/coffeimg1.jpg"} cardname="Coffe -Helps!" />
      </div>
    </div>
  );
};

export default Cards;
