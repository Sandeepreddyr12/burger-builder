import React from "react";
import classes from "./card.module.css";
import Button from "../../../../components/buttons/Buttons";

const card = (props) => {

  const style = {backgroundImage: `url(${props.bgimage})`}
 
  return (
    <div className={classes.card}
    style = {style}
    >
      <div className={classes.cardcontent}>
      <h2 className = {classes.title}>{props.cardname}</h2>
      <p className = {classes.description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quos
      </p>
      <Button btntype="success">{props.cardname.includes("Coffe") ?" Order-Now" : "Build-now"}</Button>
      </div>
    </div>
  );
};

export default card;
