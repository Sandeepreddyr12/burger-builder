import React from 'react';
import Buildcontrol from './buildcontrol/BuildControl'
import classes from './buildcontrols.module.css';


let Buildcontrols = (props) => {
const items = props.items;

let item = Object.keys(items).map(itemkey =>{
    return <Buildcontrol 
    count = {items[itemkey]} 
    key = {itemkey} 
    itemlabel = {itemkey} 
    adder = {() => props.adder(itemkey)}
    remover = {() => props.remover(itemkey)}
    disabler = {props.disabled[itemkey]}
    />
} )
return <div className = {classes.BuildControls}>
        <span className = {classes.Totalprice}>Totalprice: ₹ {props.Price.toFixed(2)}</span>
        {item}
        <button
        className = {classes.OrderButton}
        disabled = {!props.orderbutton}
        onClick = {props.modalbtn}
        >{props.auth ? "ORDER NOW" : "signup to order"}</button>
        </div>
}


export default Buildcontrols;