import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './orders.module.css';
import Order from '../../../components/Order/Order';
import axiosinstance from '../../../axios-orders';
import errorHandler from '../../../Global-error/Errorhandler';
import Spinner from '../../../components/spinners/Spinners';

import * as actions from '../../../redux/actions/index';



class Orders extends Component {

    // state = {
    //     orders : [],
    //     Loading : true,
    // }

    componentDidMount() {

        this.props.Ordersfetch();


        // axiosinstance.get('/orders.json')   
        // .then(res => {
        //     const fetchedorders = [];
        //     for(let order in res.data){
        //         fetchedorders.push({
        //             ...res.data[order],
        //             id : order,
        //         })
        //     }
        //    this.setState({
        //        orders : fetchedorders,
        //        Loading : false
        //    });
        // })
        // .catch(err =>{
        //     this.setState({
        //         Loading : false
        //     });
        // })
    }


    render() {
       let orderpage =    <Spinner/>

        if(!this.props.Loading){
            orderpage = (<div className = {classes.orders}>
                {this.props.orders.map( order => (
                <Order 
                key = {order.id}
                ingredients = {order.Items}
                price = {order.Totalprice}
                />)
                )}
            </div>)
        }
        return  (
            <div>
                {orderpage}
            </div>
        )
    }
}

 const mapPropsToState = state => {
    return { 
            orders : state.orderNowreducer.orderdata,
            Loading : state.orderNowreducer.Loading
         }
        }

const mapPropsToDispatch = (dispatch) => {
    return{
        Ordersfetch : () => dispatch(actions.Ordersfetch())
    }
    
}


export default connect(mapPropsToState,mapPropsToDispatch)(errorHandler(Orders, axiosinstance)); 