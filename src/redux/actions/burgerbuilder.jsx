import * as actiontype from "./actionType";
import axiosinstance from '../../axios-orders'

export const IngredientAdder = (ingname) => {
  return {
    type: actiontype.INGREDIENT_ADDER,
    ingredientName: ingname
  };
};


export const IngredientRemover = (ingname) => {
    return {
      type: actiontype.INGREDIENT_REMOVER,
      ingredientName: ingname
    };
  };

  


  export const SetIngredients = (ingredients) => {
    return {
      type: actiontype.FETCHED_INGREDIENTS,
      ingredients: ingredients
    };
  };

  export const ErrorIngredients = () => {
    return {
      type: actiontype.INGREDIENTS_ERROR,
    };
  };

  
  export const Init_Ingredients = () => {
    return  dispatch => {
        axiosinstance.get('https://react-myburger-3e53f-default-rtdb.firebaseio.com/ingredients.json')
            .then(res => {
                dispatch(SetIngredients(res.data))
            })
            .catch(error =>{
              dispatch (ErrorIngredients())
            })
    };
  };


  
 