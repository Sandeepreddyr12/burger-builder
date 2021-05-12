import React from 'react';
import Items from './items/Items';
import classes from './burger.module.css'

 const Burger = (props) => {
    
// console.log(props)

let DynamicItems = Object.keys(props.itemslist)
.map(itemkey =>{
     return [...Array(props.itemslist[itemkey])]
    .map((_ , i) => {
        return <Items key = {itemkey+i} type = {itemkey}/>
    })
    }).reduce((a,b) => {
    return a.concat(b);
},[])


    if(DynamicItems.length === 0){
        DynamicItems = <p>please add ingridients</p>
    }

    return (
        <div className = {classes.Burger}>
          <Items  type = 'bread-top' />
          {DynamicItems}
          <Items  type ='bread-bottom' />
        </div>
    )
}


export default Burger;