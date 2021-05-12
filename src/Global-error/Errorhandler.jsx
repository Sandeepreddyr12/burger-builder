import React, { useState ,useEffect } from 'react';
import Modal from '../components/modal/Modal';

 const errorhandler = (Wrappedcomponent, axiosinstance) => {
    return (props) =>{

   const [errorhand, seterrorHand] = useState(null);

   const requestinterceptor =  axiosinstance.interceptors.request.use(
    req => {
        seterrorHand(null);
        return req;
    }
);

const responseinterceptor =  axiosinstance.interceptors.response.use(
 res => res,
  error => seterrorHand(error));


   useEffect(() => {
         return () => {
             //console.log('unmounted', requestinterceptor ,responseinterceptor)
            axiosinstance.interceptors.response.eject(responseinterceptor);
            axiosinstance.interceptors.request.eject(requestinterceptor)
        }
   }, [requestinterceptor, responseinterceptor])

  

   const errorremover_modal = () => (
       seterrorHand(null)
   );

    return (
       <React.Fragment>
        <Modal
        show = {errorhand}
        modalexit = {errorremover_modal}>
            {errorhand ? errorhand.message : null}
        </Modal>
        <Wrappedcomponent {...props}/>
       </React.Fragment>
    )
}
}


export default errorhandler;