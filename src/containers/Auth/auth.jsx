import React, { useState, useEffect } from "react";
import { connect} from "react-redux";

import { Redirect } from "react-router-dom"

import classes from "./auth.module.css";
import Inputs from "../../components/Address-inputs/Inputs";
import Button from "../../components/buttons/Buttons";
import * as authAction from "../../redux/actions/index";
import formvalidater from "../../components/formvalidation/formvalidator";
import Spinner from "../../components/spinners/Spinners"




const Auth = (props) =>  {
const [signinForm, setsigninForm] = useState({
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
})
const [isSignUp, setisSignUp] = useState(false)
const [validationMessage, setvalidationMessage] = useState(null)
const [formvalid, setformvalid] = useState(false)

 const updatedform = {
    ...signinForm,
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
  
  useEffect(() => {
    if(!props.Burgerbuilding && props.RedirectedPath !== '/'){
      props.PathRedirect();
    }
  },[])
 
  
 

  
  
// abc = this.state.isSignup
  const formchanger = () =>{
   if(!isSignUp){
    setsigninForm({
      ...signinForm,
      ...updatedform})
   }else{
    setsigninForm({
    ...signinForm ,
    Name : null,})
   }
  }

  

  const forminputhandler = (event, inputidentifier) => {
    const upadatedSigninForm = {
      ...signinForm,
    };
    const updatedinputs = {
      ...upadatedSigninForm[inputidentifier],
    };

    updatedinputs.touched = true;

    updatedinputs.value = event.target.value;

    upadatedSigninForm[inputidentifier] = updatedinputs;

    const [inputValid, feedback] = formvalidater(updatedinputs.validation,updatedinputs.value);

    updatedinputs.valid = inputValid
    
    console.log(upadatedSigninForm)

    let formValid = true;
    for(let input in upadatedSigninForm) {
      if(input == null){
        formValid = upadatedSigninForm[input].valid && formValid;
        console.log(upadatedSigninForm[input].valid)
      } 
    }

setvalidationMessage(feedback);
setsigninForm(upadatedSigninForm);
setformvalid(formValid)

    // this.setState({
    //   validationMessage : feedback,
    //   signinForm: upadatedSigninForm,
    //   formvalid: formValid,
    // });
  };

 console.log(formvalid)
    

  const submithandler = (e) => {
    e.preventDefault();
    props.onAuth(
      signinForm.Email.value,
      signinForm.Password.value,
      isSignUp,
      (signinForm.Name && signinForm.Name.value) || "Stranger" ,
    );
    
  };

   
  
  const SignSwitchHandler =() =>{

    setisSignUp(!isSignUp);
    setvalidationMessage("");
    formchanger();

  //   this.setState(
  //     prevState => {
  //     return {
  //       isSignUp : !prevState.isSignUp,
  //       validationMessage : '',
  //     }
  //   },() => {
  //     this.formchanger();
  // })
  }


  

  

//   message = props.Message ? props.Message : props.errorMessage;
  
   
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
  
    

    

 



    const Switchbtn = {
         borderRadius : "0px",
         width : "94%",
         boxSizing : "border-box",
         marginTop : "1rem",
      };
    
    
    let formelements = [];

    for (let input in signinForm) {
      formelements.push({
        id: input,
        inputconfigss: signinForm[input],
      });
    }
    
    let form = (
      <div className={classes.auth}>
        <form onSubmit={submithandler}>
          {formelements.map((input) => {
            if(input.inputconfigss){
              return(
                <Inputs
                  key={input.id}
                  inputtype={input.inputconfigss.inputtype}
                  config={input.inputconfigss.inputconfig}
                  value={input.inputconfigss.value}
                  changed={(event) => forminputhandler(event, input.id)}
                  invalid={!input.inputconfigss.valid}
                  selectvalidate={input.inputconfigss.validation}
                  touched={input.inputconfigss.touched}
                  label={input.id}
                />)
            } 
            })}

          <Button
          style = {Switchbtn}
          btntype="success" disabled={!formvalid}>
          {isSignUp ? 'Sign up' : 'Sign in'}
          </Button>
        </form>
      </div>
    );

    if(props.Loading){
      form = <Spinner/>
    }

    
   let message = props.Message ? props.Message : props.errorMessage;
  
   let classname = props.Message ? classes.success : classes.error;
  
   setTimeout(() => {
    message = '';
  }, 2000);

   const style = [classname]

   if(!message){
      style.push(classes.hide)
   }

      let authredirect = null;

  if(props.authenticated){
    authredirect = <Redirect to = {props.RedirectedPath}/>
  }

    return (
      <div className = {classes.authcomponent}>
      <div className={classes.authContainer}>
        {authredirect} 
        <h5>{isSignUp ? <>Create a <span> Grilled-Souls</span> account </>: <>Log into<span> Grilled-Souls</span></>}</h5>
        <div className = {classes.text}>one account all ur tummy needs!</div>
        <h2 className = {style}>{message}</h2>
        {form}
      <div className={classes.validation}>{validationMessage}</div>
      <div className = {classes.switchButton}
       >{isSignUp ? <>switch to <span onClick = {SignSwitchHandler}>Sign in</span> </>: <>not Have an account?-<span onClick = {SignSwitchHandler}>Sign up</span></>} 
       </div>

      </div>
      </div>
    );
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
    onAuth: (email, password, isSignup,name) =>
      dispatch(authAction.onAuthfetch(email, password, isSignup,name)),
    PathRedirect : () => dispatch(authAction.onAuthPathRedirect('/'))
  };
};

export default connect(mapPropsToState, mapDispatchToProps)(Auth);



