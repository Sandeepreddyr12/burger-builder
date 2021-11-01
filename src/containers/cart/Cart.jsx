import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Route} from "react-router-dom";

import classes from "./cart.module.css";
import Cartitem from "./cartItem/Cartitem";
import Button from "../../components/buttons/Buttons";
import cssclass from "../Checkout/Orders/orders.module.css";
import Address from "../Checkout/Address/Address";
import Modal from "../../components/modal/Modal";
import * as actions from "../../redux/actions/index";

const Cart = (props) => {
  const [totalprice, settotalprice] = useState(0);
  const [Modals, setModals] = useState(false);

  const getTotalPrice = (items) => {
    const total = items
      .map((item) => item.price * item.quantity)
      .reduce((acc, value) => acc + value, 0);

    return total;
  };


  useEffect(() => {
    settotalprice(getTotalPrice(props.products));
  }, [props.products]);

  // let cartitems =(<div>{props.products.length?<Cartitem />: "no products in the cart"}</div>)

  const continuedHandler = () => {
    if (props.authenticated) {
      setModals(true);
      props.history.replace("/cart/address");
    } else {
      setModals(true);
      props.PathRedirect("/cart/address");
      // props.history.replace("/cart/address");
      // props.history.push("/auth");
      props.history.push({
        pathname: "/auth",
        state: "fromCart",
      });
    }
  };

  const modalremover = () => {
    setModals(false);
  };

  if (props.products.length && props.purchased) {
    props.ClearCart();
    props.OrderInit();
  }

  return (
    <div className={classes.container}>
      {props.products.length ? (
        <>
          <div className={classes.cart}>
            <div className={classes.items}>
              <div className={classes.title}>SHOPPING BAG</div>
              <h3>
                <strong style={{ color: "red", fontSize: "1.5rem" }}>
                  {props.products.length}
                </strong>
                Items
              </h3>

              {props.products.map((product) => (
                <div className={classes.cartitem}>
                  <Cartitem info={product} count={product.quantity} />
                </div>
              ))}
            </div>
            <div className={classes.checkout}>
              <h3 className={classes.checkouttitle}>ORDER SUMMARY</h3>
              <div className={classes.prices}>
                <div className={classes.columns}>
                  <span>HAVE A PROMO CODE?</span>
                </div>
                <div className={classes.columns}>
                  <span>Total Price</span>
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
                <div className={classes.columns} onClick={continuedHandler}>
                  PROCEED TO CHECKOUT
                </div>
              </div>
              <div className={classes.text}>more payment options</div>
            </div>
          </div>
          <Modal show={Modals} modalexit={modalremover} positionHandler={"1%"} SetWidth = {'450px'}>
            <Route
              path={props.match.path + "/address"}
              render={() => (
                <Address
                  TotPrice={totalprice}
                  TotItems={props.products.length}
                  fromcart={true}
                  items={props.products}
                />
              )}
            />
          </Modal>
        </>
      ) : (
        <div className={cssclass.norders} style = {{top : '15rem'}}>
          Hey, Your Bag feels so light!<Button> Add Here + </Button>
        </div>
      )}
    </div>
  );
};

const mapPropsToState = (state) => {
  return {
    products: state.cartReducer.products,
    purchased: state.orderNowreducer.Purchased,
    authenticated: state.authReducer.isAuthenticated,
  };
};

const mapPropsToDispatch = (dispatch) => {
  return {
    ClearCart: () => dispatch(actions.cartClear()),
    PathRedirect: (path) => dispatch(actions.onAuthPathRedirect(path)),
    OrderInit: () => dispatch(actions.Orderinit()),
  };
};

export default connect(mapPropsToState, mapPropsToDispatch)(Cart);
