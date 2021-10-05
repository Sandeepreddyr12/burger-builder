import * as actiontype from '../actions/actionType';

const initialstate = {
    orderdata :  [],
    Loading: false,
    Purchased : false,
}


const reducer = (state = initialstate, action) => {
    switch (action.type) {

        case actiontype.ORDER_SUCCESS:

            const orders = {
                ...action.orderdata,
                id : action.id
            }

            return{
                ...state,
                orderdata : state.orderdata.concat(orders),
                Loading : false,
                Purchased : true
            };
           
            

            case actiontype.ORDER_FAILURE:
            return{
                ...state,
                Loading : false
            };
            
            case actiontype.ON_ORDERSTART:
                return{
                    ...state,
                    Loading : true
                }

            case actiontype.ORDER_INIT:
                    return{
                        ...state,
                        Purchased :false
                    }
    


            case actiontype.ORDERS_SUCCESS:
                    return{
                        ...state,
                        orderdata : action.orders,
                        Loading : false
                    }

            case actiontype.ORDERS_FAILURE:
                        return{
                            ...state,
                            Loading : false
                        }

             case actiontype.ORDERS_START:
                            return{
                                ...state,
                                Loading : true
                            }
    
        default: 
        return state;
            
    }
}



export default reducer;