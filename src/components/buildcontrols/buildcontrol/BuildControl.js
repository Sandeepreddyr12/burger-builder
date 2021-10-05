import React from 'react';
import classes from'./buildcontrol.module.css'
 
const Buldcontrol = (props) =>{
   return <div className = {classes.BuildControl}>
        <span className = {classes.Label}>{props.itemlabel}</span>
        <div className = {classes.btnscomp}> <button className = {classes.Less}
        onClick = {props.remover} 
        disabled = {props.disabler} >Less</button>
        <span className = {classes.Count}>{props.count}</span>
        <button className = {classes.More} 
        onClick = {props.adder} >More</button></div> 
    </div>
}

export default Buldcontrol;
