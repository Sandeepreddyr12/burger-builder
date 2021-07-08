import React from 'react';
import Landingpage from '../../components/Landingpage/landingpage';
import Cards from './CardsLayout/cards';
import Itemgrid from './itemsGrid/itemgrid';
import Footer from './footer/footer';

export default function Homepage() {
    return (
        <div>
            <Landingpage/>
            <Cards/>
            <Itemgrid/>
            <Footer/>
        </div>
    )
}
