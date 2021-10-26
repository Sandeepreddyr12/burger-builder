import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import CheckoutSummary from "../../components/Checkoutsummary/Checkoutsummary";
import Address from "./Address/Address";

class Checkout extends Component {
  //   state = {
  //     ingredients: null,
  //     totalprice: null,
  //   };

  //   UNSAFE_componentWillMount() {
  //     const queryprops = new URLSearchParams(this.props.location.search);

  //     const ingredients = {};
  //     let price = 0;
  //     for (let param of queryprops.entries()) {
  //       if (param[0] === "tprice") {
  //         price = param[1];
  //       } else {
  //         ingredients[param[0]] = +param[1];
  //       }
  //     }

  //     this.setState({
  //       ingredients: ingredients,
  //       totalprice: price,
  //     });
  //   }

  cancelledHandler = () => {
    this.props.history.goBack();
  };


  continuedHandler = () => {
    this.props.history.replace("/checkout/address");
  };

  render() {
    let summary = <Redirect to="/" />;



    if (this.props.ings) {
      let purchasedredirect = this.props.purchased ? <Redirect to="/" /> : null;
      
      
      summary = (
        <div style = {{margin : '6rem 0'}}>
          {purchasedredirect}
          <CheckoutSummary
            cancelledHandler={this.cancelledHandler}
            continuedHandler={this.continuedHandler}
            ingredients={this.props.ings}
          />
          <Route
            path={this.props.match.path + "/address"}
            component={Address}
          />
        </div>
      );
    }

    return summary;
  }
}

const mapPropsToState = (state) => {
  return {
    ings: state.bbreducer.ingredients,
    purchased: state.orderNowreducer.Purchased,
    // totalprice: state.totalprice,
  };
};

export default connect(mapPropsToState)(Checkout);
