import React from 'react';
import classes from './button.module.css'

 const Buttons = (props) =>{

   return (  
        <button
         className= {[classes.button, classes[props.btntype]].join(' ')}
         style = {props.style}
         onClick={props.clicked} disabled = {props.disabled}>{props.children}
        </button>
    )   }



export default Buttons;