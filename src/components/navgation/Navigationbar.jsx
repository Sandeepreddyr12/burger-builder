import React,{useState} from 'react';
import { withRouter } from 'react-router';

import classes from './navigation.module.css';
import Navpages from './navpages/NAVpages';
import Sidebar from '../navgation/Sidebar/Sidebar'
import Overlay from '../overlay/Overlay';


export const ExitContext = React.createContext();

function Navigationbar(props) {

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
             <span className = {classes.logo} onClick = {() =>props.history.replace('/')}> <img src="/images/grilledSouls.png" alt="" /> </span>
             <nav className = {classes.desktop_mode}>
             <Navpages/>
             </nav>
             <ExitContext.Provider value = {modalexit}>
             <Sidebar show = {Menu}/>
             </ExitContext.Provider>
             <Overlay show_overlay = {showOverlay} modalexit = {modalexit}></Overlay>
             
             <div className = {classes.hamburger}
             onClick = {sidebarHandler}>↹</div>
        </div>
    )
}


export default withRouter(Navigationbar);
