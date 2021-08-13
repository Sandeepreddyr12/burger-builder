import React, { useState } from "react";
import { connect } from 'react-redux';


import classes from "./cart.module.css";
import Cartitem from "./cartItem/Cartitem";

const Cart = (props) => {
  const [product, setproduct] = useState(null);

      
  console.log(props.products)
 


  // let cartitems =(<div>{props.products.length?<Cartitem />: "no products in the cart"}</div>)



  return (
    <div className={classes.container}>
      <div className={classes.cart}>
        <div className={classes.items}>
          <div className={classes.title}>SHOPPING BAG</div>
          <h3>6 Items</h3>
          
          <Cartitem info = {props.products} />
        </div>
        <div className={classes.checkout}>
          <h3 className={classes.checkouttitle}>ORDER SUMMARY</h3>
          <div className={classes.prices}>
            <div className={classes.columns}>
              <span>HAVE A PROMO CODE?</span>
            </div>
            <div className={classes.columns}>
              <span>Merchandise</span>
              <span>₹ 500/-</span>
            </div>

            <div className={classes.columns}>
              <span>Estimated Shipping</span>
              <span>FREE</span>
            </div>
            <div className={classes.columns}>
              <span>Order Total</span>
              <span>₹ 500/-</span>
            </div>
            <div className={classes.columns}>PROCEED TO CHECKOUT</div>
          </div>
          <div className={classes.text}>more payment options</div>
        </div>
      </div>
    </div>
  );
};

const mapPropsToState = state => {
  return { 
          products : state.cartReducer.products,
       }
      }


export default connect(mapPropsToState)(Cart);
