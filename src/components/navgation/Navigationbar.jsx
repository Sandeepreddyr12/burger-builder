import React from 'react';
import classes from './navigation.module.css';
import Navpages from './navpages/NAVpages';
// import Sidebar from '../navgation/Sidebar/Sidebar'

function Navigationbar() {
    return (
        <div className = {classes.nbar}>
             <span className = {classes.logo}>FLAMED</span>
             <nav className = {classes.desktop_mode}>
             <Navpages/>
             </nav>
             {/* <Sidebar/> */}
        </div>
    )
}


export default Navigationbar;
