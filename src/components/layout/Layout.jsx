import React from 'react';
import './layout.css';
import Navigation from '../navgation/Navigationbar';
// import Checkout from '../../containers/Checkout/Checkout';


const layout = (props) => (
    <React.Fragment>
        <div className = 'navcontrols'>
            <Navigation/>
        </div>
       
    <main>
        {props.children}
    </main>
    
    </React.Fragment>
);

export default layout;


