import * as actiontype from '../actions/actionType';

const initialState = {
    isSigningUp : false,
    isSigningOut : false, 
    Loading : false,
    Error : null,
    isLoggingIn: false,
    isLoggingOut: false,
    isVerifying: false,
    isAuthenticated: false,
    Message : null,
    user: {},
    uid : null,
    pathredirect : '/'
}

const reducer =  (
    state = initialState,
    action
  ) => {
    switch (action.type) {
        case actiontype.SIGNUP_REQUEST:
            return {
              ...state,
              isSigningUp : true,
              // SigningError: null
              Error : null,
              Message : null,
              Loading : true
            };

            case actiontype.SIGNUP_SUCCESS:
        return {
          ...state,
          Message : action.message,
          isSigningUp : false,
          Loading : false
        };

        case actiontype.SIGNUP_ERROR:
        return {
          ...state,
          isSigningUp: false,
          Error: action.error,
          isAuthenticated: false,
          Message : null,
          Loading : false
        };



      case actiontype.LOGIN_REQUEST:
        return {
          ...state,
          isLoggingIn: true,
          Message : null,
          Error: false,
          Loading : true
        };
      case actiontype.LOGIN_SUCCESS:
        return {
          ...state,
          isLoggingIn: false,
          isAuthenticated: true,
          user: {...action.authdata},
          Message : action.message,
          Loading : false,
          uid : action.uid
        };
      case actiontype.LOGIN_FAILURE:
        return {
          ...state,
          isLoggingIn: false,
          isAuthenticated: false,
          Error: action.error,
          Message : null,
          Loading : false,
          uid : null,
        };
      case actiontype.LOGOUT_REQUEST:
        return {
          ...state,
          isLoggingOut: true,
          Error: null,
          Message : null,
          Loading : true
        };
      case actiontype.LOGOUT_SUCCESS:
        return {
          ...initialState,
          Message : action.Message,
          uid : null,
        };
      case actiontype.LOGOUT_FAILURE:
        return {
          ...state,
          isLoggingOut: false,
          Error: action.error,
          Loading : false
        };

        case actiontype.ON_PATHCHANGE:
          return{
            ...state,
            pathredirect : action.path
          }

    //   case actiontype.VERIFY_REQUEST:
    //     return {
    //       ...state,
    //       isVerifying: true,
    //       verifyingError: false
    //     };
    //   case actiontype.VERIFY_SUCCESS:
    //     return {
    //       ...state,
    //       isVerifying: false
    //     };
      default:
        return state;
    }
  };

  export default reducer;