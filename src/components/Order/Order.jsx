import React from "react";
import classes from "./Order.module.css";

const Order = (props) => {

  let ings;

  if(props.Ingredients.items){
    const ingredients = [];

    for (let item in props.Ingredients.items) {
      ingredients.push({
        item: item,
        itemcount: props.Ingredients.items[item],
      });
    }
  
    ings = <div>Ingredients: {ingredients.map((ig) => (
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
    ))}</div> 

  }else {
    ings = <span style = {{fontSize : '1.1rem',color : 'grey'}}>Size : {props.Ingredients.size}</span> 
  }

  let d = new Date(new Date().getTime() + 33 * 60000)
  let time = d.toLocaleTimeString();

  return (
    <div className={classes.singleorder}>
      <div className = {classes.product}>
        <div style = {{color : 'green',
         padding : '1.2em 0',
         textTransform : 'uppercase',
         display : 'block',
         fontSize : '1.2rem'
      }}>{props.Ingredients.productname ? props.Ingredients.productname : 'Burger-Builder' }</div>
        <div>Price : ₹ {props.products.Totalprice} &times; {props.products.quant}</div>
      <div>Total Price: <span style = {{color : 'purple',fontSize : '1.2rem'}}>₹ {props.products.Totalprice*props.products.quant} /-</span></div>
      </div>
      <div className = {classes.address}>
        <div>{ings}</div>
        <div>arriving by : {time}/ <span style = {{color : 'green'}}>33 min</span> </div>
        <div style = {{marginTop : '1rem', borderTop : '1px solid grey'}}>    
          <div style = {{textTransform : 'uppercase',marginBottom : '.8rem'}}>{props.products.customer.Name}</div>   
           <div style = {{color : 'grey',fontSize : '.9rem'}}> address/zipcode : {props.products.customer.Address}/{props.products.customer.zipcode}</div>
        </div>
      </div>
    </div>
  );
};

export default Order;
