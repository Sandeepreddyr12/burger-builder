import React from 'react';
import Landingpage from '../../components/Landingpage/landingpage';
// import Cards from './CardsLayout/cards';
// import Itemgrid from './itemsGrid/itemgrid';a
import Spinner from '../../components/spinners/Spinners';

const LazyCards = React.lazy(() => import('./CardsLayout/cards'))
const LazyItemgrid = React.lazy(() => import('./itemsGrid/itemgrid'))


export default function Homepage() {


    return (
        <div>
            <Landingpage/>
            <React.Suspense fallback = {<Spinner/>} > <LazyCards/></React.Suspense>
            <React.Suspense fallback = {<Spinner/>} >  <LazyItemgrid/></React.Suspense>
        </div>
    )
}
