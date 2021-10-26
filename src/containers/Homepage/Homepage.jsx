import React from 'react';
import Landingpage from '../../components/Landingpage/landingpage';
import Cards from './CardsLayout/cards';
import Itemgrid from './itemsGrid/itemgrid';


const LazyCards = React.lazy(() => import('./CardsLayout/cards'))
const LazyItemgrid = React.lazy(() => import('./itemsGrid/itemgrid'))


export default function Homepage() {
    return (
        <div>
            <Landingpage/>
            <React.Suspense fallback = 'loading'> <LazyCards/></React.Suspense>
            <React.Suspense fallback = 'loading'>  <LazyItemgrid/></React.Suspense>
        </div>
    )
}
