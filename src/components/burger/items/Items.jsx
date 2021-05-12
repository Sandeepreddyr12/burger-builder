import React from 'react';
import classes from './items.module.css';

const Items =(props) => {

   let items = null;

    switch (props.type){
        case ('salad') :
            items = <div className = {classes.Salad}></div>
            break;
        
        case ('meat') :
            items = <div className = {classes.Meat}></div>
            break;

        case ('bacon') :
            items = <div className = {classes.Bacon}></div>
            break;
        
        case ('cheese') :
            items = <div className = {classes.Cheese}></div>
            break;

        case ('bread-top') :
                items = <div className = {classes.BreadTop}>
                <div className = {classes.Seeds1}></div>
                <div className = {classes.Seeds2}></div>
                    </div>
            break;

            case ('bread-bottom') :
            items = <div className = {classes.BreadBottom}></div>
            break;

            default :
            items = null;
    }
    return items;
}


export default Items;