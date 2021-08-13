import * as actiontype from "../actions/actionType";


const initialState = {
    products : [],
}

const cartReducer = (state = initialState, action) =>{
switch(action.type){
    case actiontype.ON_CARTED:
        return{
            ...state,
            products : action.itemname,
        
        }

        // case actiontype.ON_CART_REMOVED:
        // return{
        //     ...state,
        //     products : products.map(a => a != action.itemname)

        //     // products : [
        //     //     ...state.products,
        //     //     ...products.map(a => {a != action.itemname})
        //     // ]
        // }
        default:
      return state;
}
}

export default cartReducer;