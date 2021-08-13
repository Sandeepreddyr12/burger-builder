import React from 'react';
import Burgerbuilder from '../burgerbuilder/Burgerbuilder';
import Items from '../../components/burger/items/Items';
// import SWitems from '../../components/burger/items/SWitems/SWitems';
import classes from './builders.module.css';

const Builders = () => {
    return (
        <div className = {classes.container}>
            <Burgerbuilder product = {Items}/>
            {/* <Burgerbuilder product = {SWitems}/> */}
        </div>
    )
}

export default Builders;