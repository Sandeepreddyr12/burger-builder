import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

 function Privateroute({component : Component,...rest}) {
    const authenuser = useSelector(state => state.authReducer.isAuthenticated)
        return (
            <Route
             {...rest}
             render ={props =>{
                 return authenuser ? <Component {...props}/> : <Redirect to = '/auth' /> 
             }}
            />
         )
    
}


export default  Privateroute;