import React, { useEffect} from 'react';
import { Route, Switch,Redirect} from 'react-router-dom';
import { useDispatch} from 'react-redux';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './App.css';
import Layout from './components/layout/Layout';
import Auth from './containers/Auth/auth';
import Myprofile from './containers/Auth/Profilecomp/myprofile';
import Privateroute from './components/Privateroute/Privateroute';
import * as actions from './redux/actions/index';
import Homepage from './containers/Homepage/Homepage';
import Spinner from './components/spinners/Spinners';
// import Cart from './containers/cart/Cart';
// import Checkout from './containers/Checkout/Checkout';
// import Orders from './containers/Checkout/Orders/Orders';
// import Builder from './containers/builderss/Builders';
// import Offerings from './components/offerings/Offerings';
// import Footer from './containers/Homepage/footer/footer';



const LazyBuilder = React.lazy(() => import('./containers/builderss/Builders'))
const LazyOrders = React.lazy(() => import('./containers/Checkout/Orders/Orders'))
const LazyOfferings = React.lazy(() => import('./components/offerings/Offerings'))
const LazyCheckout = React.lazy(() => import('./containers/Checkout/Checkout'))
const LazyCart = React.lazy(() => import('./containers/cart/Cart'))
const LazyFooter = React.lazy(() => import('./containers/Homepage/footer/footer'))


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
        <React.Suspense fallback = {<Spinner/>}>
        <Switch>
           <Route path = '/builder' component = {LazyBuilder} />
           <Route path = '/checkout' component = {LazyCheckout} />
           <Route path = '/offerings' component = {LazyOfferings} />
           <Route path = '/cart' component = {LazyCart} />
            <Privateroute path = "/Myprofile" component = {Myprofile}/>
            
           <Privateroute path = '/orders' component = {LazyOrders} />
           <Route path = '/auth' component = {Auth} />
           <Route path = '/' exact component = {Homepage} />
           <Redirect to = '/'/>
        </Switch>
        </React.Suspense>
      </Layout>
      <React.Suspense fallback = 'loading....'><LazyFooter/> </React.Suspense>
    </div>
  );
}


export default App;
