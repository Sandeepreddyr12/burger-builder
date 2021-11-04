import  * as actiontype from "./actionType";
import { auth } from '../../firebase';
import { toast } from "react-toastify";



export const signUpRequest = () => {
  toast.loading("wait a moment ⌛, ur about to join us");

  return {
      type : actiontype.SIGNUP_REQUEST
  }
}

export const signUpSuccess = (name) => {
  toast.dismiss();
  toast.success(`welcome ${name ? name : 'here'} , thank u joining us`);

    return {
        type : actiontype.SIGNUP_SUCCESS,
        message : `welcome ${name ? name : 'here'} , thank u joining us`,
    }
}



export const signUpFailure = (error) => {
  toast.dismiss();
  toast.error( `${error}  😫`)
    return {
        type : actiontype.SIGNUP_ERROR,
        error : error,
    }
}





export const loginRequest = () => {
  toast.loading("wait a moment ⌛, ur about to join us");

  return {
      type : actiontype.LOGIN_REQUEST,
  }
}



export const loginSuccess = (data) => {
  toast.dismiss();
  toast.success(`welcome back ${data.name ? data.name : '👨🏻'}`);

  return {
      type : actiontype.LOGIN_SUCCESS,
      uid : data.uid,
      authdata : data,
      message : `welcome back ${data.name ? data.name : '👨🏻'}`,
  }
}

export const loginFailure = (error) => {
  toast.dismiss();
  toast.error( `${error}  😫`)
  return {
      type : actiontype.LOGIN_FAILURE,
      error : error,
  }
}

const logoutRequest = () => {
  toast.loading("wait a moment ⌛");
  return {
    type: actiontype.LOGOUT_REQUEST
  };
};

const logoutSuccess = () => {
  toast.dismiss();
  toast.success('logged out,LOGIN to tummy full of happiness');
  return {
    type: actiontype.LOGOUT_SUCCESS,
    Message : 'logged out,login to tummy full of happiness'
  };
};

const logoutError = (error) => {
  toast.dismiss();
  toast.error( `${error}  😫`)

  return {
    type: actiontype.LOGOUT_FAILURE,
    error:error,
  };
};


const onAuthchangeRequest = () => {
  return {
    type: actiontype.ONAUTHCHANGE_REQUEST,
  };
};
const onAuthchangeSuccess = () => {
  return {
    type: actiontype.ONAUTHCHANGE_SUCCESS,
    // authdata : data,
  };
};



export const onAuthfetch = (email, password, isSignup,name, historyReplaceHandler) => async dispatch => {
  if(isSignup){
    dispatch(signUpRequest());
        auth.createUserWithEmailAndPassword(email, password)
        .then(userAuth => {
          userAuth.user.updateProfile({
            displayName: name,
          })
        
        .then(() => {
          
          const data = {
            email  : userAuth.user.email,
            uid : userAuth.user.uid,
            name : userAuth.user.displayName,
          }
          console.log(data)
          dispatch(signUpSuccess(data.name));
          // auth.onAuthStateChanged((user) => {
          //   if (user.emailVerified) {
          //     // Email is verified

          //     console.log('sign up success')
          //     dispatch(signUpSuccess());
          //     console.log('sign up success55')
          //   } else {
          //     // Email is not verified
          //     dispatch({
          //       type: signUpFailure,
          //       payload:
          //         "1Something went wrong, we couldn't create your account. Please try again."
          //     });
          //   }
          // });
        })
      })
        .catch((error) => {
          dispatch(signUpFailure(error.code));
          toast.dismiss();
          toast.error( `${error.code}  😫`);
        });
      }else{
        dispatch(loginRequest());
            auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
              const data = {
                email  : userAuth.user.email,
                uid : userAuth.user.uid,
                name : userAuth.user.displayName,
              }
              
              dispatch(loginSuccess(data));
              historyReplaceHandler('/');
            })
            .catch(error => {
              console.log(error.code)
              //Do something with the error if you want!
              dispatch(loginFailure(error.code));
            });
        };
      
  };



  export const onlogoutFetch = (historyReplaceHandler) => dispatch => {
    dispatch(logoutRequest());
      auth
      .signOut()
      .then(() => {
        dispatch(logoutSuccess());
        historyReplaceHandler('/auth')
      })
      .catch(error => {
        //Do something with the error if you want!
        console.log(error)
        dispatch(logoutError(error.code));
      });
  };
  
  export const verifyAuth = () => dispatch => {
    dispatch(onAuthchangeRequest());
      auth
      .onAuthStateChanged(userAuth => {
        if(userAuth) {
          const data = {
            email  : userAuth.email,
            uid : userAuth.uid,
            name : userAuth.displayName,
          }
          dispatch(loginSuccess(data));
          dispatch(onAuthchangeSuccess());
        }
      });
  };
  

  export const onAuthPathRedirect = (path) =>{
return {
  type : actiontype.ON_PATHCHANGE,
  path : path
}
  }