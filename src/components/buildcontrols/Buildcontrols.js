import React from 'react';
import Buildcontrol from './buildcontrol/BuildControl';
import CartButton from '../../containers/cart/cartItem/cartbutton/CartButton';
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
        
        <div className = {classes.btns}>
        <CartButton data = {{items : {...props.items}, price : props.Price, productname :"Burger-Builder", id : props.Price+'burger-builder', quantity : 1}} disabler = {props.Price <= 25}/>
        <button
        className = {classes.OrderButton}
        disabled = {!props.orderbutton}
        onClick = {props.modalbtn}
        >{props.auth ? "ORDER NOW" : "signup to order"}</button>
        </div>
        </div>
}


export default Buildcontrols;