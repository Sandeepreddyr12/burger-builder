import React from 'react';
import Navpage from './page-link/Navpage';
import classes from  './navpages.module.css'
import Button from '../../buttons/Buttons';

function NAVpages() {
    return (
       <div className = {classes.navpages}>
            <ul>
            <Navpage link = "/" >Home</Navpage>
            <Navpage link = '/offerings' >Offerings</Navpage>
            <Navpage link = '/orders'>Orders</Navpage>
            <Navpage link = '/auth' >Auth</Navpage>
             <Navpage link = '/Contactbtn' ><Button
             btntype = 'success'>
                     <strong>Contact Us</strong>
                 </Button></Navpage>
            </ul>
       </div>
    )
}


export default NAVpages;