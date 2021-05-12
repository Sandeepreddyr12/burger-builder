import React from 'react';
import classes from './overlay.module.css'

function Overlay(props) {
    return (
        props.show_overlay ? (<div className = {classes.overlay}
        onClick = {props.modalexit}>
            {props.children}
        </div>):null
    )
}

export default Overlay;