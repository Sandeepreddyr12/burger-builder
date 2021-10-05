import React, {useState, useEffect,useRef} from 'react';
import Navpage from './page-link/Navpage';
import classes from  './navpages.module.css'
import Button from '../../buttons/Buttons';
import {useSelector} from 'react-redux';

import {auth} from '../../../firebase'

function NAVpages() {
    const onauth = useSelector(state => state.authReducer.isAuthenticated)

    const [route,setroute] = useState(null)

    useEffect(() => {
      const unsub =  auth.onAuthStateChanged(user => {

                // route = user ? <Navpage link = '/Myprofile' >profile</Navpage> : <Navpage link = '/auth' >Auth</Navpage> 
                setroute(user ? (<NavItem name = {'Sandy'}>
                <DropdownMenu/>
              </NavItem>): <Navpage link = '/auth' >Auth</Navpage>)
                })
        return () => {
           unsub()
        }
    }, [])

   

     return (
       <div className = {classes.navpages}>
            <ul>
            <Navpage link = "/" >Home</Navpage>
            <Navpage link = "/builder" >Builder</Navpage>
            <Navpage link = '/offerings' >Offerings</Navpage>
            {route} 
            <Navpage link = '/cart' >Cart</Navpage>
          {/* {onauth ?  <Navpage link = '/orders'>Orders</Navpage> : null} */}
             {/* <Navpage link = '/Contactbtn' >
               <Button btntype = 'success'>
                     <strong>Contact Us</strong>
                 </Button></Navpage> */}
            </ul>
       </div>
    )
}

function NavItem(props) {
  const [Dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <div className= {classes.navitem}
    onMouseEnter = {onMouseEnter}
    onMouseLeave = {onMouseLeave}
    >
      <div className= {classes.link} onClick={() => setDropdown(!Dropdown)}>
        {props.name}
      </div>

      {Dropdown && props.children}
    </div>
  );
}

function DropdownMenu() {

  return (
    <div className= {classes.dropdown} >
          <div className= {classes.menu}>
          <Navpage link = '/Myprofile' >profile</Navpage>  
          <Navpage link = '/orders'>Orders</Navpage>        
          <Navpage link = '/offerings' >sandy</Navpage>
          <Navpage link = '/offerings' >sandy</Navpage>
          <Navpage link = '/Contactbtn' >
                <Button btntype = 'success'>
                     <strong>Contact Us</strong>
                 </Button>
          </Navpage>
          </div>
     </div>

  )}

export default NAVpages;