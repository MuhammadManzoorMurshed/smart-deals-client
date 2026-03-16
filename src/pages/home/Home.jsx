import React from 'react';
import RecentProducts from '../recent-products/RecentProducts';
import Hero from '../../hero/Hero';

const recentProductsPromise = fetch('https://smart-deals-server-three.vercel.app/recent-products')
    .then(res => {
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        return res.json();
    });

const Home = () => {
    return (
        <div className=''>
            <Hero />
            <RecentProducts recentProductsPromise={recentProductsPromise} />
        </div>
    );
};

export default Home;