import React,{useState} from 'react';
import { connect } from 'react-redux';


import * as actions from '../../../../redux/actions/cart';
import Buttons from '../../../../components/buttons/Buttons';
import classes from './cartbutton.module.css';


const CartButton = (props) => {

    const [btntext, setbtntext] = useState('Add to Cart')

    const onclick = () =>{
        props.itemCarted({...props.data})
        setbtntext('Move to Cart')
    }

    console.log(props.data)
    
    return (
        <div className = {classes.cartbutton}>
            <Buttons
            clicked = {() =>onclick()}
            >{btntext}</Buttons>
        </div>
    )
}


const mapPropsToDispatch = (dispatch) => {
    return{
        itemCarted : (items) => dispatch(actions.itemCarted(items))
    }
    
}

export default connect( null, mapPropsToDispatch)(CartButton);