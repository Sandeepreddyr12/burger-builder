import React, { Component } from "react";
import { connect} from "react-redux";

import { Redirect } from "react-router-dom"

import classes from "./auth.module.css";
import Inputs from "../../components/Address-inputs/Inputs";
import Button from "../../components/buttons/Buttons";
import * as authAction from "../../redux/actions/index";
import formvalidater from "../../components/formvalidation/formvalidator";
import Spinner from "../../components/spinners/Spinners"
// import { Route } from "react-router";


// const initialform  = {
//   Email: {
//     inputtype: "input",
//     inputconfig: {
//       type: "email",
//       placeholder: "Add ur email",
//     },
//     value: "",
//     validation: {
//       required: true,
//       isEmail: true,
//     },
//     valid: false,
//     touched: false,
//   },

//   Password: {
//     inputtype: "input",
//     inputconfig: {
//       type: "password",
//       // style : '-webkit-text-security:square',
//       placeholder: "type ur password",
//     },
//     value: "",
//     validation: {
//       required: true,
//       minLength: 6,
//     },
//     valid: false,
//     touched: false,
//   },
// }
class Auth extends Component {
  state = {
    signinForm: {
      Name : null,
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
        // style : '-webkit-text-security:square',
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
    isSignUp : false,
    validationMessage : null,
  };

  updatedform = {
    ...this.state.signinForm,
    Name : {
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
}
  
  
 
  
  componentDidMount(){
 if(!this.props.Burgerbuilding && this.props.RedirectedPath !== '/'){
      this.props.PathRedirect();
    }
  }

  
  
// abc = this.state.isSignup
  formchanger = () =>{
   if(!this.state.isSignup){
    this.setState({ signinForm : {...this.updatedform}})
   }else{
    this.setState({Name : null })
   }
  }

  

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

    const [inputValid, feedback] = formvalidater(updatedinputs.validation,updatedinputs.value);

    updatedinputs.valid = inputValid


    let formValid = true;
    for (let input in upadatedSigninForm) {
      if(input == null){
        formValid = upadatedSigninForm[input].valid && formValid;
      } 
    }

    this.setState({
      validationMessage : feedback,
      signinForm: upadatedSigninForm,
      formvalid: formValid,
    });
  };

 
    

  submithandler = (e) => {
    e.preventDefault();
    this.props.onAuth(
      this.state.signinForm.Email.value,
      this.state.signinForm.Password.value,
      this.state.isSignUp,
    );
    
  };

   
  
  SignSwitchHandler =() =>{
    this.setState(
      prevState => {
      return {
        isSignUp : !prevState.isSignUp,
        validationMessage : '',
      }
    },() => {
      this.formchanger();
  })
  }


  

  

//   message = this.props.Message ? this.props.Message : this.props.errorMessage;
  
   
//     hideTimeout;
//   componentDidUpdate(){
//    if (!message) {
//       this.hideTimeout = setTimeout(() => {message=''}, 3000);
//    }
//  }

//  // clean up in case there is pending update
//  componentWillUnmount() {
//    clearTimeout(this.hideTimeout)
//  }
  
    

    

 
  render() {


    const Switchbtn = {
         borderRadius : "0px",
         width : "94%",
         boxSizing : "border-box",
         marginTop : "1rem",
      };
    
    
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
          {formelements.map((input) => {
            console.log(input.inputconfigss)
            if(input.inputconfigss){
              return(
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
                />)
            } 
            })}

          <Button
          style = {Switchbtn}
          btntype="success" disabled={!this.state.formvalid}>
          {this.state.isSignUp ? 'Sign up' : 'Sign in'}
          </Button>
        </form>
      </div>
    );

    if(this.props.Loading){
      form = <Spinner/>
    }

    console.log(this.props)

    
   let message = this.props.Message ? this.props.Message : this.props.errorMessage;
  
   let classname = this.props.Message ? classes.success : classes.error;
  
   setTimeout(() => {
    message = '';
  }, 2000);

   const style = [classname]

   if(!message){
      style.push(classes.hide)
   }

      let authredirect = null;

  if(this.props.authenticated){
    authredirect = <Redirect to = {this.props.RedirectedPath}/>
  }

    return (
      <div className={classes.authContainer}>
        {authredirect} 
        <h5>Come Join US</h5>
        <h5 className = {style}>{message}</h5>
        {form}
      <div className={classes.validation}>{this.state.validationMessage}</div>
      <div className = {classes.switchButton}
       >{this.state.isSignUp ? <>switch to <span onClick = {this.SignSwitchHandler}>Sign in</span> </>: <>not Have an account?-<span onClick = {this.SignSwitchHandler}>Sign up</span></>}
       </div>

      </div>
    );
  }
}


const mapPropsToState = (state) => {
  return{
    Message : state.authReducer.Message,
    errorMessage  : state.authReducer.Error,
    Loading : state.authReducer.Loading,
    authenticated : state.authReducer.isAuthenticated,
    users : state.authReducer.user,
    RedirectedPath : state.authReducer.pathredirect,
    Burgerbuilding : state.bbreducer.building
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignup) =>
      dispatch(authAction.onAuthfetch(email, password, isSignup)),
    PathRedirect : () => dispatch(authAction.onAuthPathRedirect('/'))
  };
};

export default connect(mapPropsToState, mapDispatchToProps)(Auth);



