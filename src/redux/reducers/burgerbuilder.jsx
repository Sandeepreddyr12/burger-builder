import * as actiontype from "../actions/actionType";

const initialState = {
  ingredients: null,
  totalprice: 25,
  // Loading : false,
  error : false,
};

const price = {
  salad: 6,
  meat: 15,
  bacon: 12,
  cheese: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.INGREDIENT_ADDER:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },

        totalprice: state.totalprice + price[action.ingredientName],
      };

    case actiontype.INGREDIENT_REMOVER:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        totalprice: state.totalprice - price[action.ingredientName],
      };

      case actiontype.FETCHED_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients,
        totalprice : 25,
        error : false,
      };

      case actiontype.INGREDIENTS_ERROR:
        return {
          ...state,
          error : true
        };

    default:
      return state;
  }
};

export default reducer;
