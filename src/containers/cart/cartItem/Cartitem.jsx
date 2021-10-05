import React from 'react';
import { connect } from "react-redux";

import classes from './cartitem.module.css';
import * as actions from '../../../redux/actions/index';
import Buldcontrol from '../../../components/buildcontrols/buildcontrol/BuildControl';
import Burger from '../../../components/burger/Burger';

const Cartitem = (props) => { 


    const ingredients = [];

    if(props.info.items){
    for (let item in props.info.items) {
      ingredients.push({
        item: item,
        itemcount: props.info.items[item],
      });
    } }


    const outItems = ingredients.length ? ingredients.map((a) => (
        <span
        key = {a.item}
        >{a.item} [{a.itemcount}]</span>
    )) : props.info.size

    return (
        <div className = {classes.item}>
            <div className = {classes.product}>
 {props.info.img ? <img src={props.info.img} alt={props.info.productname} /> : <Burger itemslist = {props.info.items}/>}           
           </div>
            <div className = {classes.description}>
                <div className = {classes.title}>{props.info.productname}</div>
               {props.info ? <div className = {classes.price}><span>₹ {props.info.price + (0.2 * (props.info.price))}</span> ₹ { props.info.price }</div> : 'ur order is invalid'}
                <div className = {classes.controls}>
                <div className = {classes.ingredients}>
                    {outItems}
                </div>
                <div className = {classes.quantity}>
                  <Buldcontrol count = {props.count} 
                  adder = {() => props.itemIncrementer(props.info)}
                  remover = {() => props.itemDecrementer(props.info.id)}
                  disabler ={props.count <= 1}
                /> </div>
                </div>
                <div className = {classes.buttons}>
                    <span onClick = {() => props.itemRemover(props.info.id)}> remove</span>
                    <span>Checkout</span>
                </div>
            </div>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
      itemRemover: (id) =>
        dispatch(actions.onItemRemoved(id)),
      itemIncrementer : (item) => 
        dispatch(actions.itemCarted(item)),
      itemDecrementer : (id) =>
        dispatch(actions.cartItemDecrement(id)),
    };
  };


export default connect(null,mapDispatchToProps)(Cartitem);