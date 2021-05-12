import React from "react";
import classes from "./Order.module.css";

const Order = (props) => {
  const ingredients = [];

  for (let item in props.ingredients) {
    ingredients.push({
      item: item,
      itemcount: props.ingredients[item],
    });
  }

  const outingredients = ingredients.map((ig) => (
    <span
      style={{
        color: "grey",
        display: "inline-block",
        textTransform: "capitalize",
        padding: "0 8px",
        border: "0.1rem solid lightgray",
        margin: "0 3px",
      }}
      key={ig.item}
    >
      {ig.item}({ig.itemcount})
    </span>
  ));

  return (
    <div className={classes.singleorder}>
      <span>Ingredients : {outingredients}</span>
      <span>
        <strong>₹ {props.price}</strong>{" "}
      </span>
    </div>
  );
};

export default Order;
