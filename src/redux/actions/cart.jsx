import  * as actiontype from "./actionType";




  export const itemCarted = (item) => {
    return {
        type : actiontype.ON_CARTED,
        itemname : item,
    }
  }

  export const onItemRemoved = (id) => {
    return {
        type : actiontype.ON_ITEM_REMOVED,
        id : id,
    }
  }



  export const cartItemDecrement = (id) => {
    return {
        type : actiontype.CART_ITEM_DECREMENT,
        id : id,
    }
  }

  export const cartClear = () => {
    return {
        type : actiontype.ON_CLEAR_CART,
    }
  }