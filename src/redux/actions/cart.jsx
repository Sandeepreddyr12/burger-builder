import  * as actiontype from "./actionType";




  export const itemCarted = (item) => {
    return {
        type : actiontype.ON_CARTED,
        itemname : item,
    }
  }

  export const onItemRemoved = (item) => {
    return {
        type : actiontype.ON_CART_REMOVED,
        itemname : item,
    }
  }


//   export const initialCart = (item) => {
//     return dispatch(itemCarted(item))
//   }