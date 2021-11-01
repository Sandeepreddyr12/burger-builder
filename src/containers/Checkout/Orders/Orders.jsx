import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import classes from './orders.module.css';
import Order from '../../../components/Order/Order';
import axiosinstance from '../../../axios-orders';
import errorHandler from '../../../Global-error/Errorhandler';
import Spinner from '../../../components/spinners/Spinners';
import Buttons from '../../../components/buttons/Buttons';

import * as actions from '../../../redux/actions/index';




class Orders extends Component {

    // state = {
    //     orders : [],
    //     Loading : true,
    // }

    componentDidMount() {

        this.props.Ordersfetch(this.props.uid);


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

        console.log("🔻❤🔻💕🙋🏻‍♂️");

       let orderpage  =  <Spinner/> 

        if(!this.props.Loading){
            orderpage = (<div className = {classes.orders}>
              {this.props.orders.length ? this.props.orders.map( order => (
                <Order 
                key = {order.id}
                Ingredients = {order.Items}
                products = {order}
                price = {order.Totalprice}
                />)
                ) : <div className = {classes.norders}>No Orders Placed. 
                <Buttons>Explore here</Buttons>
                </div> }
            </div>)
        }
        return  (
            <div className = {classes.container}>
                <ToastContainer/> 
                <div className = {classes.title}>My Orders</div>
                {orderpage}
            </div>
        )
    }
}

 const mapPropsToState = state => {
    return { 
            orders : state.orderNowreducer.orderdata,
            Loading : state.orderNowreducer.Loading,
            uid : state.authReducer.uid
         }
        }

const mapPropsToDispatch = (dispatch) => {
    return{
        Ordersfetch : (userId) => dispatch(actions.Ordersfetch(userId))
    }
    
}


export default connect(mapPropsToState,mapPropsToDispatch)(errorHandler(Orders, axiosinstance)); 