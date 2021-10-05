import React, { useState , useEffect} from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import classes from "./cart.module.css";
import Cartitem from "./cartItem/Cartitem";
import Button from "../../components/buttons/Buttons";
import cssclass from "../Checkout/Orders/orders.module.css";
import Address from "../Checkout/Address/Address";
import Modal from "../../components/modal/Modal";
import * as actions from '../../redux/actions/index';

const Cart = (props) => {
  const [totalprice, settotalprice] = useState(0);
  const [Modals, setModals] = useState(false)
  
  const getTotalPrice = (items) => {
    const total = items
      .map((item) => item.price*item.quantity)
      .reduce((acc, value) => acc + value, 0);
    
    return total;
  };
  
  
  useEffect(() => {
  settotalprice(getTotalPrice(props.products));
  }, [props.products])

  // console.log(props.products);

  // let cartitems =(<div>{props.products.length?<Cartitem />: "no products in the cart"}</div>)

  const continuedHandler = () => {
    setModals(true)
    props.history.replace("/cart/address");
  };

 const modalremover = () => {
    setModals(false)
}

let purchasedredirect;

if (props.products.length && props.purchased ) {
  props.ClearCart() 
}


  return (
    <div className={classes.container}>
      {props.products.length ? (
      <> 
       <div className={classes.cart}>
          <div className={classes.items}>
            <div className={classes.title}>SHOPPING BAG</div>
            <h3> <strong style = {{color : 'red',fontSize : '1.5rem'}}> {props.products.length}</strong> Items</h3>

            {props.products.map((product) => (
               <div className = {classes.cartitem}> <Cartitem info={product} 
                count = {product.quantity}
                /></div>
            ))}

          </div>
          <div className={classes.checkout}>
            <h3 className={classes.checkouttitle}>ORDER SUMMARY</h3>
            <div className={classes.prices}>
              <div className={classes.columns}>
                <span>HAVE A PROMO CODE?</span>
              </div>
              <div className={classes.columns}>
                <span>Merchandise</span>
                <span>₹ {totalprice}/-</span>
              </div>

              <div className={classes.columns}>
                <span>Estimated Shipping</span>
                <span>FREE</span>
              </div>
              <div className={classes.columns}>
                <span>Order Total</span>
                <span>₹ {totalprice}/-</span>
              </div>
              <div className={classes.columns} onClick = {continuedHandler}>PROCEED TO CHECKOUT</div>
            </div>
            <div className={classes.text}>more payment options</div>
          </div>
        </div>
        <Modal show = {Modals} modalexit = {modalremover}>
        <Route
        path={props.match.path + "/address"}
        render={() => <Address TotPrice={totalprice} TotItems = {props.products.length} fromcart = {true} items = {props.products}/>}
          />        </Modal>

       
      </>
      ) : (
        <div className={cssclass.norders}>
          Your Cart is empty !<Button>Explore here</Button>
        </div>
      )}
    </div>
  );
};

const mapPropsToState = (state) => {
  return {
    products: state.cartReducer.products,
    purchased: state.orderNowreducer.Purchased,
  };
};

const mapPropsToDispatch = (dispatch) => {
  return{
      ClearCart : () => dispatch(actions.cartClear())
  }
  
}

export default connect(mapPropsToState,mapPropsToDispatch)(Cart);
