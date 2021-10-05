import React, { useEffect} from 'react';
import { Route, Switch,Redirect} from 'react-router-dom';
import { useDispatch} from 'react-redux';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './App.css';
import Layout from './components/layout/Layout';
import Builder from './containers/builderss/Builders';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Checkout/Orders/Orders';
import Auth from './containers/Auth/auth';
import Myprofile from './containers/Auth/Profilecomp/myprofile';
import Privateroute from './components/Privateroute/Privateroute';
import * as actions from './redux/actions/index';

import Homepage from './containers/Homepage/Homepage';
import Cart from './containers/cart/Cart';
import Offerings from './components/offerings/Offerings';


function App() {
  // const [route,setroute] = useState(null)

  // const authenuser = useSelector(state => state.authReducer.isAuthenticated)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.verifyAuth())
  },[])




  return (
    <div className="App">
      <ToastContainer autoClose={2000} />
      <Layout>
        {/* <Offerings/>
        <Cart/> */}
        {/* <Orders/> */}
        <Switch>
           <Route path = '/builder' component = {Builder} />
           <Route path = '/checkout' component = {Checkout} />
           <Route path = '/offerings' component = {Offerings} />
           <Route path = '/cart' component = {Cart} />
            <Privateroute path = "/Myprofile" component = {Myprofile}/>
            
           <Privateroute path = '/orders' component = {Orders} />
           <Route path = '/auth' component = {Auth} />
           <Route path = '/' exact component = {Homepage} />
           <Redirect to = '/'/>
        </Switch>
      
      {/* {a ?  <Burgerbuilder/> : null} */}
      </Layout>
    </div>
  );
}


export default App;
