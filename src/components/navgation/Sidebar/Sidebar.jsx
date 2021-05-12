import React from 'react';
import Navpages from '../navpages/NAVpages';
import classes from './Sidebar.module.css';

 const Sidebar = () => {
    return (
        <div className= {classes.sidebar}>
           <Navpages/>
        </div>
    )
}

export default Sidebar;