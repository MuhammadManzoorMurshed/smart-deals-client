import React from 'react';
import RecentProducts from '../recent-products/RecentProducts';
import Hero from '../../hero/Hero';

const recentProductsPromise = fetch('https://smart-deals-server-three.vercel.app/recent-products')
    .then(res => res.json());

const Home = () => {
    return (
        <div className=''>
            <Hero />
            <RecentProducts recentProductsPromise={recentProductsPromise} />
        </div>
    );
};

export default Home;