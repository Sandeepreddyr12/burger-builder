import React from 'react';
import Navpages from '../navpages/NAVpages';
import classes from './Sidebar.module.css';

 const Sidebar = (props) => {
let styles = props.show ? [classes.sidebar, classes.open].join(' ') : classes.sidebar;
    return (
        <div className = {styles}>
           <Navpages/>
        </div>
    )
}

export default Sidebar;