import React from "react";
import Burger from '../burger/Burger';
import Button from "../buttons/Buttons";
import classes from './checkSummary.module.css';

const Checkoutsummary = (props) => {
  return (
    <div className = {classes.checkoutsummary}>
      <h1>Taste's very best</h1>
      <div className = {classes.burger}> 
          <Burger itemslist = {props.ingredients}/> 
      </div>
      
      <Button
      clicked = {props.cancelledHandler}
      btntype="cancel">Cancel</Button>
      <Button
      clicked = {props.continuedHandler}
      btntype="success">Continue</Button> 
    </div>
  );
};

export default Checkoutsummary;
