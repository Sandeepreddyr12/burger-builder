import React from 'react';
import classes from './modal.module.css';
import Overlay from '../overlay/Overlay'


const Modal = (props) => {
    
       // console.log('use effect modal')
return(   
    <React.Fragment>
        <Overlay show_overlay = {props.show}
        modalexit = {props.modalexit}/>

        <div className = {classes.container}
     style = {{
         transform : props.show ? 'translateY(0)' : 'translateY(-100vh)',
         opacity : props.show ? '1' : '0'
     }}
     >
        {props.children}
    </div>
    </React.Fragment>
    )}

export default React.memo(Modal,
    (prevProps, nextProps) => 
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children ); 
    // React.memo can be used instead of
   //  shouldComponentUpdate , memo is used in functional components
   // unlike life cycle methods shouldComponentUpdate,only works in class components