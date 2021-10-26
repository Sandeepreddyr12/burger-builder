import React, {useState} from 'react';
import classes from './offering.module.css';
import CartButton from '../../../containers/cart/cartItem/cartbutton/CartButton';

const  OfferingsCard = (props) => {

const [formSelect, setformSelect] = useState('Medium');
console.log(formSelect)

console.log(props.details)

let prices;

if(formSelect === 'Medium'){
  prices = props.details.cost;
}else if(formSelect === 'Small'){
  prices = props.details.cost - (0.3 * (props.details.cost));
}else if(formSelect === 'Large'){
  prices = props.details.cost + (0.3 * (props.details.cost));
}


    return (
  <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.cardheader}>
        <img src={props.details.img} alt="" />
        </div>
        <div className={classes.cardbody}>
          <p className = {classes.title}>{props.details.name}</p>
          <p className = {classes.disc}>
            {props.details.discript}
          </p>
          <select value={formSelect}
          onChange = {(e) => setformSelect(e.target.value)}
          >
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
      <div className = {classes.btns}>
        <p>₹ {prices}/-</p>
      <CartButton data = {{price : prices, productname : props.details.name, size : formSelect, id : props.details.id+formSelect+props.details.name, quantity  : 1, img : props.details.img}}/>
      </div>
        </div>
      </div>
     </div> 
    )
}


export default OfferingsCard;