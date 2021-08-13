
import  * as actiontype from "./actionType";
import axiosinstance from "../../axios-orders"

export const orderSuccess = (id , orderdata) => {
    return {
        type : actiontype.ORDER_SUCCESS,
        id : id,
        orderdata :  orderdata
    }
}

export const orderFailure = (error) => {
    return {
        type : actiontype.ORDER_FAILURE,
        error : error
    }
}

export const onOrderstart = () => {
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
        return {
            type : actiontype.ORDERS_SUCCESS,
            orders : fetcheditems
        }
    }

    export const OrdersFailure = (error) => {
        return {
            type : actiontype.ORDERS_FAILURE,
            error: error
        }
    }

    export const OrdersStart = () => {
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
            console.log(res)
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