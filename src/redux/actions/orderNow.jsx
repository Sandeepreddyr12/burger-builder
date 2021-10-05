
import  * as actiontype from "./actionType";
import axiosinstance from "../../axios-orders"
import { toast } from "react-toastify";

export const orderSuccess = (id , orderdata) => {
    toast.dismiss();
       toast.success("Order placed 👌");
    return {
        type : actiontype.ORDER_SUCCESS,
        id : id,
        orderdata :  orderdata
    }
}

export const orderFailure = (error) => {
    toast.dismiss();
    toast.error(' "ERROR" Order not placed 😫');

    return {
        type : actiontype.ORDER_FAILURE,
        error : error
    }
}

export const onOrderstart = () => {
    toast.dismiss();
    toast.loading("wait a moment ⌛");
    return {
        type : actiontype.ON_ORDERSTART,
    }
}


export const orderStart = (orderdata) => {
    return dispatch =>{
       dispatch(onOrderstart());
        axiosinstance
      .post("/orders.json", orderdata)
      .then((res) => {
        dispatch(orderSuccess(res.data.name, orderdata))
      })
      .catch((error) => {
          dispatch(orderFailure(error))
      });
  };
    }


    export const Orderinit = () => {
        return {
            type : actiontype.ORDER_INIT,
        }
    }


    export const OrdersSuccess = (fetcheditems) => {
        toast.dismiss();
        return {
            type : actiontype.ORDERS_SUCCESS,
            orders : fetcheditems
        }
    }

    export const OrdersFailure = (error) => {
        toast.dismiss();
        toast.error(`${error} "ERROR Occured😫'`);
        return {
            type : actiontype.ORDERS_FAILURE,
            error: error
        }
    }

    export const OrdersStart = () => {
        toast.loading("wait a moment ⌛, fetching your Orders");
        return {
            type : actiontype.ORDERS_START,
        }
    }

    export const Ordersfetch = (userId) => {
        return dispatch =>{
            dispatch(OrdersStart());
            const queryParams = '?orderBy="userId"&equalTo="' + userId +'"';
            axiosinstance.get('/orders.json' + queryParams)   
        .then(res => {
            const fetchedorders = [];
            
            for(let order in res.data){
                fetchedorders.push({
                    ...res.data[order], 
                    id : order,
                })
            }
          dispatch(OrdersSuccess(fetchedorders))
        })
        .catch(err => dispatch(OrdersFailure(err)))
        }
    }