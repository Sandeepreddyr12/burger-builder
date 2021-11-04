import React from 'react';
import Navpages from '../navpages/NAVpages';
import classes from './Sidebar.module.css';

 const Sidebar = (props) => {

let styles = props.show ? [classes.sidebar, classes.open].join(' ') : classes.sidebar;
    return (
        <div className = {styles}>
        <div className = {classes.exitbtn}><button
       onClick = {props.modalexit}
       >&times;</button>
       </div>
            <div className = {classes.profimg}>
            <img src="/images/profileimg.png" alt="profile" />
             </div>
           <Navpages modalexit = {props.modalexit}/>
        </div>
    )
}

export default Sidebar;