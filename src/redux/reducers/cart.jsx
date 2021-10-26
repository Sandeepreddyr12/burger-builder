import * as actiontype from "../actions/actionType";


const initialState = {
    products : [],
}

const cartReducer = (state = initialState, action) =>{
switch(action.type){
    case actiontype.ON_CARTED:

        let existed_item=  state.products.find(item=>  action.itemname.id === item.id)

        if (existed_item) {
            existed_item.quantity += 1
            return {
                ...state,
                products : [...state.products]
            }
        }else{
            return{
                ...state,
                products : [...state.products, action.itemname],
            
            }
        }


        case actiontype.ON_ITEM_REMOVED:
            return {
                ...state,
                products : state.products.filter(cartItem=>cartItem.id !== action.id )}


         case actiontype.CART_ITEM_DECREMENT:

            let decremeting =  state.products.find(item=>  action.id === item.id)
                decremeting.quantity -= 1;
            
                    return {
                        ...state,
                        products : [...state.products]
                    }
        
        case actiontype.ON_CLEAR_CART:
            
                    return {
                        ...initialState,
                    }
        
                default:
      return state;
}
}

export default cartReducer;