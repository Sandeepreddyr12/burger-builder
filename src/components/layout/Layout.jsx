import React from 'react';
import './layout.css';
import Navigation from '../navgation/Navigationbar';


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


