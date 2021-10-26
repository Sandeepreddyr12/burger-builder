import React, {useState, useEffect} from 'react';
import Navpage from './page-link/Navpage';
import classes from  './navpages.module.css'
import Button from '../../buttons/Buttons';

import {auth} from '../../../firebase'

import { BiHomeHeart ,BiShoppingBag,BiDownArrow} from "react-icons/bi";
import { GiHamburger } from "react-icons/gi";
import { IoFastFoodOutline,IoBagCheckOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import Logoutbtn from '../../../containers/Auth/Profilecomp/logoutbtn/Logoutbtn';


function NAVpages(props) {


    const [route,setroute] = useState(null)

    useEffect(() => {
      const unsub =  auth.onAuthStateChanged(user => {
                // route = user ? <Navpage link = '/Myprofile' >profile</Navpage> : <Navpage link = '/auth' >Auth</Navpage> 
                setroute(user ? (<NavItem name = {user.displayName.slice(0,7)}>
                <DropdownMenu/>
              </NavItem>): <div className = {classes.authbtn}> <Navpage link = '/auth' >Login/Sign_up</Navpage></div>)
                })
        return () => {
           unsub()
        }
    }, [])

   

     return (
       <div className = {classes.navpages}>
            <ul>
            <Navpage link = "/" ><div><BiHomeHeart/></div> Home</Navpage>
            <Navpage link = "/builder" ><div><GiHamburger/></div>Builder</Navpage>
            <Navpage link = '/offerings' ><div><IoFastFoodOutline/></div>Offerings</Navpage>
            <Navpage link = '/cart'><div><BiShoppingBag/></div>Bag</Navpage>
            {route} 
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
      {/* <div style = {{textAlign : 'center',fontSize : '1.2rem'}}><RiAccountCircleLine/></div> */}
      <div className = {classes.profimg}>
        <img src="/images/profileimg.png" alt = 'Profile'/>
      </div>
       <div className = {classes.profileText} > <span style = {{paddingRight : '.5rem'}}> {props.name} </span> 
       <span className = {classes.downIcon}  style = {Dropdown ? {transform: 'rotate(180deg)'} : {transform: 'rotate(90deg)'}} ><BiDownArrow/></span>
       </div>
      </div>
      {Dropdown && props.children}
    </div>
  );
}

function DropdownMenu() {

  return (
    <div className= {classes.dropdown} >
          <div className= {classes.menu}>
          <Navpage link = '/Myprofile' ><div><RiAccountCircleLine/></div><div style = {{ fontSize :'1rem',paddingLeft : '.5rem'}}>Profile</div></Navpage>  
          <Navpage link = '/orders'><div><IoBagCheckOutline/></div> <div style = {{ fontSize :'1rem',paddingLeft : '.5rem'}}>Orders</div></Navpage>        
          
          <Navpage link = '/Contactbtn' >
                <Button btntype = 'success'>
                   <div><strong>Contact Us</strong></div>
                 </Button>
          </Navpage>
          <Navpage link = '/logout' >
                <Logoutbtn/>
          </Navpage>
          </div>
     </div>

  )}

export default NAVpages;