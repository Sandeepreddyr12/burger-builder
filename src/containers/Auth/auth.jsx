import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./auth.module.css";
import Inputs from "../../components/Address-inputs/Inputs";
import Button from "../../components/buttons/Buttons";
import * as authAction from "../../redux/actions/index";
import formvalidater from "../../components/formvalidation/formvalidator";

class Auth extends Component {
  state = {
    signinForm: {
      Email: {
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

      Password: {
        inputtype: "input",
        inputconfig: {
          type: "password",
          placeholder: "type ur password",
        },
        value: "",
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
  };

  // formvalidater = (rules, value) => {
  //     let isValid = false;

  // if(!rules){
  //   return true
  // }

  //     if(rules.required){
  //       isValid = value.trim() !== ''
  //     }
  //     if(rules.length){
  //       isValid = value.length === rules.length;
  //     }

  //     if (rules.minLength) {
  //         isValid = value.length >= rules.minLength && isValid
  //     }

  //   if (rules.isEmail) {
  //       const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  //       isValid = pattern.test(value) && isValid
  //   }

  //     return isValid;
  // }

  forminputhandler = (event, inputidentifier) => {
    const upadatedSigninForm = {
      ...this.state.signinForm,
    };
    const updatedinputs = {
      ...upadatedSigninForm[inputidentifier],
    };

    updatedinputs.touched = true;

    updatedinputs.value = event.target.value;

    upadatedSigninForm[inputidentifier] = updatedinputs;

    updatedinputs.valid = formvalidater(
      updatedinputs.validation,
      updatedinputs.value
    );

    let formValid = true;
    for (let input in upadatedSigninForm) {
      formValid = upadatedSigninForm[input].valid && formValid;
    }

    this.setState({
      signinForm: upadatedSigninForm,
      formvalid: formValid,
    });
  };

  submithandler = (e) => {
    e.preventDefault();
    this.props.onAuth(
      this.state.signinForm.Email.value,
      this.state.signinForm.Password.value
    );
  };

  render() {
    let formelements = [];

    for (let input in this.state.signinForm) {
      formelements.push({
        id: input,
        inputconfigss: this.state.signinForm[input],
      });
    }

    let form = (
      <div className={classes.auth}>
        <form onSubmit={this.submithandler}>
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
            Sign in
          </Button>
        </form>
      </div>
    );

    return (
      <div className={classes.authContainer}>
        <h4>Come Join US</h4>
        {form}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) =>
      dispatch(authAction.authFetch(email, password)),
  };
};

export default connect(null, mapDispatchToProps)(Auth);
