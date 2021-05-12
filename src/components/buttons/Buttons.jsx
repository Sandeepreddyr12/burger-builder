import React from 'react';
import classes from './button.module.css'

 const Buttons = (props) =>
    (   <button
         className= {[classes.button, classes[props.btntype]].join(' ')}
         onClick={props.clicked} disabled = {props.disabled}>{props.children}
        </button>
    )   



export default Buttons;