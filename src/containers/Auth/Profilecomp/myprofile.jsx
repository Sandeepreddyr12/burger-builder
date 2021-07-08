import React from 'react';
import {connect} from 'react-redux';

import * as authAction from "../../../redux/actions/index";
import Button from '../../../components/buttons/Buttons';
import classes from './profile.module.css'



const Myprofile = (props) => {
    // const user = useSelector(state => state.authReducer.user)
    console.log(props.users)

    const Switchbtn = {
      borderRadius : "0px",
      width : "94%",
      boxSizing : "border-box",
      marginTop : "1rem",
   };

  const historyRepalceHandler = (link) => {
    props.history.replace(link);
      }

     const logoutHandler = (e) => {
        e.preventDefault();
        props.onLogout(historyRepalceHandler );
      }

    return (
        <div className = {classes.component}>
           <div className = {classes.profile}>
           <div className = {classes.circle}>
             hi
           </div>
            <div> 
              <span>hello</span>
              <div><strong>{props.users.name}</strong></div>
            <div><strong>{props.users.email}</strong></div>
            </div>
           </div>
            <Button btntype = "cancel"
        style = {Switchbtn}
        clicked = {logoutHandler}
        >logout</Button>
        </div>
    )
}


const mapPropsToState = (state) => {
    return{
      users : state.authReducer.user,
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        onLogout : (historyRepalceHandler) => dispatch(authAction.onlogoutFetch(historyRepalceHandler)),
  
    };
  };
  

export default connect(mapPropsToState,mapDispatchToProps)(Myprofile);