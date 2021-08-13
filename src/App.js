import React, { useEffect} from 'react';
import { Route, Switch,Redirect} from 'react-router-dom';
import { useDispatch} from 'react-redux'

// import { auth } from './firebase';

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

function App() {
  // const [route,setroute] = useState(null)

  // const authenuser = useSelector(state => state.authReducer.isAuthenticated)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.verifyAuth())
  },[])


  // console.log(Checkout)
  // console.log(Builder)



  return (
    <div className="App">
      <Layout>
        {/* <Cart/> */}
        <Switch>
           <Route path = '/builder' component = {Builder} />
           <Route path = '/checkout' component = {Checkout} />
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
