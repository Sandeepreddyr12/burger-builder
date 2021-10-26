import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';

import classes from './navpage.module.css';

import { ExitContext } from '../../../navgation/Navigationbar'



function Navpage(props) {

    const modalexit = useContext(ExitContext)

    return (
        <li className = {classes.navpage} onClick = {modalexit}>
        <NavLink exact
        activeClassName = {classes.active}
         to={props.link}>
             {props.children}
        </NavLink>
        </li>
    )
}
 

export default Navpage;