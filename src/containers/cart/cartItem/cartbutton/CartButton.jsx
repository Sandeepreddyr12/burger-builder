import React,{useState,useEffect} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../../../redux/actions/cart';
import Buttons from '../../../../components/buttons/Buttons';
import classes from './cartbutton.module.css';


const CartButton = (props) => {

    const [btntext, setbtntext] = useState('Add to Cart')

    let quant;

    const onclick = () =>{
        props.itemCarted({...props.data})
        quant = quant ? quant : 0
        setbtntext(`Add+ (${1 + quant})` );    
    }



    useEffect(() => {
        let product = props.products.find(item =>  props.data.id === item.id);
        if(product){
         quant = product.quantity
     }
    }, [onclick])

    // console.log(props.quant, 'mmmmqqqqq')

    // console.log(props.disabler, 'mmmmqqqqq')

    
    return (
        <div className = {classes.cartbutton}>
            <Buttons
            clicked = {() =>onclick()}
            disabled = {props.disabler}
            >{btntext}</Buttons>
            <Buttons clicked = {() =>props.history.push('./cart')}
            disabled = {props.disabler}>Cart &#8669;</Buttons>
        </div>
    )
}

const mapPropsToState = (state) => {
    return {
      products: state.cartReducer.products,
    };
  };
  

const mapPropsToDispatch = (dispatch) => {
    return{
        itemCarted : (items) => dispatch(actions.itemCarted(items))
    }
    
}

export default connect(mapPropsToState, mapPropsToDispatch)(withRouter(CartButton));