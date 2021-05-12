import  * as actiontype from "./actionType";
import axios from 'axios';

export const authSuccess = (authdata) => {
    return {
        type : actiontype.AUTH_SUCCESS,
        authdata : authdata
    }
}



export const authFailure = (error) => {
    return {
        type : actiontype.AUTH_FAILURE,
        error : error,
    }
}

export const authStart = () => {
    return {
        type : actiontype.AUTH_START
    }
}

export const authFetch = (email, password) => {
    return  dispatch => {
        dispatch(authStart);
        const authdata = {
            email : email,
            password : password,
            returnSecureToken : true
        }
         axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyAygLGXt1loX3Yr1mMBsKqNjqjyckCBxuQ', authdata)
       .then(res =>  {
           console.log(res)
           dispatch(authSuccess(res.data))
           })
       .catch(err =>{
        console.log(err)
           dispatch(authFailure(err))
       })
    }
}