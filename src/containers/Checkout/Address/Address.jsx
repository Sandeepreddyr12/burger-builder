import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./address.module.css";
import Button from "../../../components/buttons/Buttons";
import axiosinstance from "../../../axios-orders";
import Spinner from "../../../components/spinners/Spinners";
import Inputs from "../../../components/Address-inputs/Inputs";
import * as orderNowAction from "../../../redux/actions/index";
import errorhandler from "../../../Global-error/Errorhandler";
import formvalidater from "../../../components/formvalidation/formvalidator";

class Address extends Component {
  state = {
    orderform: {
      Name: {
        inputtype: "input",
        inputconfig: {
          type: "text",
          placeholder: "enter ur name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      email: {
        inputtype: "input",
        inputconfig: {
          type: "email",
          placeholder: "Add ur email",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },

      zipcode: {
        inputtype: "input",
        inputconfig: {
          type: "number",
          placeholder: "enter 6 digit Zipcode",
        },
        value: "",
        validation: {
          required: true,
          length: 6,
          isNumeric: true,
        },
        valid: false,
        touched: false,
      },

      Address: {
        inputtype: "textarea",
        inputconfig: {
          type: "text",
          placeholder: "Add ur address",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      deleverymethod: {
        inputtype: "select",
        inputconfig: {
          options: [
            { value: "fastest", label: "Fastest" },
            { value: "cheapest", label: "Cheapest" },
          ],
        },
        value: "fastest",

        valid: true,
      },
    },
    // Loading: false,
    formvalid: false,
    feedbackMessage : null,
  };

 

  orderhandler = (e) => {
    e.preventDefault();
    // this.setState({ Loading: true });

    const formdata = {};

    for (let inputidentifier in this.state.orderform) {
      formdata[inputidentifier] = this.state.orderform[inputidentifier].value;
    }

    const order = {
      Items: this.props.ings,
      Totalprice: this.props.totalprice,
      customer: formdata,
      userId : this.props.UID
    };

    this.props.orderinitiater(order);

    // axiosinstance
    //   .post("/orders.json", order)
    //   .then((res) => {
    //     this.setState({ Loading: false, modal_order: false });
    //     this.props.history.push("/");
    //   })
    //   .catch((error) => this.setState({ Loading: false, modal_order: false }));
  };

  forminputhandler = (event, inputidentifier) => {
    const upadatedorderform = {
      ...this.state.orderform,
    };
    const updatedinputs = {
      ...upadatedorderform[inputidentifier],
    };

    updatedinputs.touched = true;

    updatedinputs.value = event.target.value;

    upadatedorderform[inputidentifier] = updatedinputs;

    const [inputValid, feedback] = formvalidater(updatedinputs.validation,updatedinputs.value);

    
    // upadatedorderform.feedbackMessage = feedback;

    updatedinputs.valid = inputValid;

    let formValid = true;
    for (let input in upadatedorderform) {
      formValid = upadatedorderform[input].valid && formValid;
    }

    this.setState({
      feedbackMessage : feedback,
      orderform: upadatedorderform,
      formvalid: formValid,
    });

  };

  render() {
    let formelements = [];

    for (let input in this.state.orderform) {
      formelements.push({
        id: input,
        inputconfigss: this.state.orderform[input],
      });
    }

    let form = (
      <div className={classes.form}>
        <form onSubmit={this.orderhandler}>
          {formelements.map((input) => (
            <Inputs
              key={input.id}
              inputtype={input.inputconfigss.inputtype}
              config={input.inputconfigss.inputconfig}
              value={input.inputconfigss.value}
              changed={(event) => this.forminputhandler(event, input.id)}
              invalid={!input.inputconfigss.valid}
              selectvalidate={input.inputconfigss.validation}
              touched={input.inputconfigss.touched}
              label={input.id}
            />
          ))}
            
          <Button btntype="success" disabled={!this.state.formvalid}>
            Order-Now
          </Button>
        </form>
      </div>
    );

    if (this.props.Loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.formContainer}>
        <h4>Add ur Address</h4>
        <div className={classes.validation}>{this.state.feedbackMessage}</div>
        {form}
      </div>
    );
  }
}

const mapPropsToState = (state) => {
  return {
    ings: state.bbreducer.ingredients,
    totalprice: state.bbreducer.totalprice,
    Loading: state.orderNowreducer.Loading,
    UID : state.authReducer.uid
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    orderinitiater: (orderdata) =>
      dispatch(orderNowAction.orderStart(orderdata)),
  };
};

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(errorhandler(Address, axiosinstance));
