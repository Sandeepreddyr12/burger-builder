import React,{useState} from 'react';

import classes from './navigation.module.css';
import Navpages from './navpages/NAVpages';
import Sidebar from '../navgation/Sidebar/Sidebar'
import Overlay from '../overlay/Overlay';

function Navigationbar() {

    const [Menu, setMenu] = useState(false);

    const sidebarHandler = () =>{
        setMenu(true)
    }
    

    let showOverlay = Menu;
    const modalexit = () =>{
        setMenu(false)
    }
    return (
        <div className = {classes.nbar}>
             <span className = {classes.logo}>FLAMED</span>
             <nav className = {classes.desktop_mode}>
             <Navpages/>
             </nav>
             <Overlay show_overlay = {showOverlay} modalexit = {modalexit}><Sidebar show = {Menu}/></Overlay>
             
             <div className = {classes.hamburger}
             onClick = {sidebarHandler}>↹</div>
        </div>
    )
}


export default Navigationbar;
