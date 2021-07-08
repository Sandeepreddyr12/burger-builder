import React, {useState, useEffect} from 'react';
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
                setroute(user ? <Navpage link = '/Myprofile' >profile</Navpage> : <Navpage link = '/auth' >Auth</Navpage>)
                })
        return () => {
           unsub()
        }
    }, [])

   

    console.log(route)
    return (
       <div className = {classes.navpages}>
            <ul>
            <Navpage link = "/" >Home</Navpage>
            <Navpage link = "/builder" >Builder</Navpage>
            <Navpage link = '/offerings' >Offerings</Navpage>
          {onauth ?  <Navpage link = '/orders'>Orders</Navpage> : null}
            {route}
            {/* <Navpage link = '/auth' >Auth</Navpage> */}
            {/* <Navpage link = '/Myprofile' >profile</Navpage> */}
             <Navpage link = '/Contactbtn' ><Button
             btntype = 'success'>
                     <strong>Contact Us</strong>
                 </Button></Navpage>
            </ul>
       </div>
    )
}


export default NAVpages;