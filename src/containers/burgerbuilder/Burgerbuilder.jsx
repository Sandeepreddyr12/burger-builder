import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import classes from "./burgerbuilder.module.css";
import Burger from "../../components/burger/Burger";
import Buildcontrols from "../../components/buildcontrols/Buildcontrols";
import Modal from "../../components/modal/Modal";
import Ordersummary from "../../components/odersummary/Ordersummary";
import Spinner from "../../components/spinners/Spinners";
import axiosinstance from "../../axios-orders";
import errorhandler from "../../Global-error/Errorhandler";
import cssclasses from '../Checkout/Orders/orders.module.css';
import Buttons from "../../components/buttons/Buttons";
import cssclass from '../Checkout/Orders/orders.module.css'
import * as actions from "../../redux/actions/index";

class Burgerbuilder extends Component {
  state = {
    //    ingredients : null,
    //    totalprice : 25,
    //    orderable : false,
    modal_order: false,
    //    Loading : false,
    //    getError : false,
  };

  componentDidMount() {
    this.props.FetchedIngredients();
    // this.props.onVerify()
  }

  modalbtn = () => {
    if (this.props.authenticated) {
      this.setState({
        modal_order: true,
      });
    } else {
      this.props.PathRedirect("/checkout");
      this.props.history.push("/auth");
    }
  };

  modalremover = () => {
    this.setState({
      modal_order: false,
    });
  };

  checkouthandler = () => {
    this.props.PurchaseInit();

    this.props.history.push("/checkout");
  };

  orderbtn = (newingredients) => {
    const ingredients = Object.values(newingredients).reduce((a, b) => {
      return a + b;
    });
    return ingredients > 0;
  };

  // itemAdder = (item) => {
  //     const updatedingredients = {
  //         ...this.state.ingredients
  //     }
  // const oldcount = updatedingredients[item];
  // const currentcount = oldcount + 1;
  // updatedingredients[item] = currentcount;

  //   const  oldprice = this.state.totalprice;
  //   const newprice = price[item];
  //   const updatedprice = oldprice + newprice;

  // this.setState({
  //     ingredients : updatedingredients,
  //     totalprice : updatedprice
  // })

  //     this.orderbtn(updatedingredients);
  // }

  // itemRemover = (item) => {
  //     // if(this.state.totalprice <= 25){
  //     //     return;
  //     // }
  //     const updatedingredients = {
  //         ...this.state.ingredients
  //     }
  // const oldcount = updatedingredients[item];

  // if(oldcount <= 0){
  //     return;
  // }

  // const currentcount = oldcount - 1;
  // updatedingredients[item] = currentcount;
  // const  oldprice = this.state.totalprice;
  // const newprice = price[item];
  // const updatedprice = oldprice - newprice;

  // this.setState({
  //     ingredients : updatedingredients,
  //     totalprice : updatedprice
  // })
  // this.orderbtn(updatedingredients);

  // }

  render() {



    const less_disabler = { ...this.props.ings };

    for (let key in less_disabler) {
      less_disabler[key] = less_disabler[key] <= 0;
    }

    let ordersummary = null;

    let burger = this.props.error ? <div className = {cssclasses.norders}>Something went wrong. 
    <Buttons>Refresh Page</Buttons>
    </div> : <Spinner />;

    if (this.props.ings) {
      burger = (
        <React.Fragment>
          <Burger itemslist={this.props.ings} product={this.props.product} />
          <Buildcontrols
            items={this.props.ings}
            adder={this.props.IngredientAdder}
            Price={this.props.totalprice}
            remover={this.props.IngredientRemover}
            disabled={less_disabler}
            orderbutton={this.orderbtn(this.props.ings)}
            modalbtn={this.modalbtn}
            auth={this.props.authenticated}
          />
        </React.Fragment>
      );

      ordersummary = (
        <Ordersummary
          ingredients={this.props.ings}
          Price={this.props.totalprice}
          // modalexit = {this.modalremover}
          checkout={this.checkouthandler}
        />
      );
    }

    //  if(this.state.Loading){
    //     ordersummary = <Spinner/>
    // }

    return (
      <div className={classes.bbcontainer}>
        <div style = {{textAlign: 'center'}}  className = {cssclass.title} >Burger-builder</div>
        <Modal show={this.state.modal_order} modalexit={this.modalremover} positionHandler = {'22%'}>
          {ordersummary}
        </Modal>

        {burger}
      </div>
    );
  }
}

const mapPropsToState = (state) => {
  return {
    ings: state.bbreducer.ingredients,
    totalprice: state.bbreducer.totalprice,
    error: state.bbreducer.error,
    authenticated: state.authReducer.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    IngredientAdder: (ingname) => dispatch(actions.IngredientAdder(ingname)),
    IngredientRemover: (ingname) =>
      dispatch(actions.IngredientRemover(ingname)),
    FetchedIngredients: () => dispatch(actions.Init_Ingredients()),
    PurchaseInit: () => dispatch(actions.Orderinit()),
    PathRedirect: (path) => dispatch(actions.onAuthPathRedirect(path)),
  };
};

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(withRouter(errorhandler(Burgerbuilder, axiosinstance)));
