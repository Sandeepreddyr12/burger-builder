import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './navpage.module.css';

function Navpage(props) {
    return (
        <li className = {classes.navpage}>
        <NavLink exact
        activeClassName = {classes.active}
         to={props.link}>
             {props.children}
        </NavLink>
        </li>
    )
}
 

export default Navpage;