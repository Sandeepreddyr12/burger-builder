import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './components/layout/Layout';
import Burgerbuilder from './containers/burgerbuilder/Burgerbuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Checkout/Orders/Orders';
import Auth from './containers/Auth/auth'


function App() {

  // const [a , seta] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     seta(false)
  //   }, 5000);
  // }, [])

  return (
    <div className="App">
      <Layout>
        <Switch>
           
           <Route path = '/checkout' component = {Checkout} /> 
           <Route path = '/orders' component = {Orders} />
           <Route path = '/auth' component = {Auth} />
           <Route path = '/' exact component = {Burgerbuilder} />
        </Switch>
      
      {/* {a ?  <Burgerbuilder/> : null} */}
      </Layout>
    </div>
  );
}


export default App;
