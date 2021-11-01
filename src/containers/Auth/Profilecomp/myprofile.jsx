import React from 'react';
import {connect} from 'react-redux';

import {HiUser,HiOutlineMail} from "react-icons/hi";

import classes from './profile.module.css';
import Logoutbtn from './logoutbtn/Logoutbtn';


const Myprofile = (props) => {


    return (
      <div className = {classes.container}>
        <div className = {classes.component}>
           <div className = {classes.profile}>
           <div className = {classes.circle}>
             <img src="/images/profileimg.png" alt="profile" />
           </div>
            <div className = {classes.details}> 
              <span>hello <span role = "img" aria-label="Hello">🙏🏻</span></span>
              <div style = {{textTransform : "capitalize"}}><strong><HiUser/>  {props.users.name ? props.users.name :'hello user'}</strong></div>
            <div><strong><HiOutlineMail/>  {props.users.email}</strong></div>
            </div>
           </div>
            <Logoutbtn/>
        </div>
        </div>
    )
}



const mapPropsToState = (state) => {
    return{
      users : state.authReducer.user,
    }
  }

 
  

export default connect(mapPropsToState)(Myprofile);