import React from 'react';
import classes from'./buildcontrol.module.css'
 
const Buldcontrol = (props) =>{
   return <div className = {classes.BuildControl}>
        <span className = {classes.Label}>{props.itemlabel}</span>
        <button className = {classes.Less}
        onClick = {props.remover} 
        disabled = {props.disabler} >less</button>
        <span className = {classes.Count}>{props.count}</span>
        <button className = {classes.More} 
            onClick = {props.adder} >More</button>
    </div>
}

export default Buldcontrol;
