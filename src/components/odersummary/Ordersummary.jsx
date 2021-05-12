import  React from 'react';
import classes from './ordersummary.module.css'
import Button from '../buttons/Buttons'

const Ordersummary = (props) => {
 
    //console.log('use effect ordersummary');

    const ingredients = Object.keys(props.ingredients)
    .map(a => {
        return <li key = {a}> {a} : {props.ingredients[a]}</li>
    })

    

    return(
    <React.Fragment>
        <div className = {classes.header}>
       <p>ORDER SUMMARY</p>
       <button
       onClick = {props.modalexit}
       >&times;</button>
       </div>

        <ul className = {classes.items}>
        {ingredients}
        </ul>

        <div className = {classes.processingbtn}>
        <p>₹ {props.Price.toFixed(2)}</p>
        <Button clicked = {props.checkout}
        btntype = 'success'>Check Out?</Button>
        </div>
    </React.Fragment>
 )}

 export default Ordersummary;