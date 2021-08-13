import React from 'react';


import classes from './cartitem.module.css';

const Cartitem = (props) => { 

    console.log(props.info)

    const ingredients = [];

    for (let item in props.info.items) {
      ingredients.push({
        item: item,
        itemcount: props.info.items[item],
      });
    }

    console.log(ingredients)

    const outItems = ingredients.map((a) => (
        <span
        key = {a.item}
        >{a.item} [{a.itemcount}]</span>
    ))

    return (
        <div className = {classes.item}>
            <div className = {classes.product}></div>
            <div className = {classes.description}>
                <div className = {classes.title}>{props.info.productname}</div>
                <div className = {classes.price}><span>₹ 135.00</span>₹ {props.info ?  props.info.price : 222  }</div>
                <div className = {classes.ingredients}>
                    {outItems}
                </div>
                <div className = {classes.quantity}>qty - 1</div>
                <div className = {classes.buttons}>
                    <span>remove</span>
                    <span>Checkout</span>
                </div>
            </div>
        </div>
    )
}


export default Cartitem;