import React from 'react';
import Heading from '../../components/heading/Heading';
import Product from '../../components/product/Product';
import { use } from 'react';

const RecentProducts = ({ recentProductsPromise }) => {
    const recentProducts = use(recentProductsPromise);

    const headingTitle = {
        part1: "Recent",
        part2: "Products"
    }

    return (
        <div className='bg-[#f2f2f2]'>
            <div className='max-w-360 mx-auto py-20'>
                <Heading headingTitle={headingTitle} />
                <div className='grid grid-cols-3 gap-6 my-10'>
                    {
                        recentProducts.map(recentProduct => {
                            return <Product key={recentProduct._id} recentProduct={recentProduct} />
                        })
                    }
                </div>
                <button className='bg-gradient-primary mx-auto block rounded-md px-6 py-3 font-semibold text-base text-white'>Show All</button>
            </div>
        </div>
    );
};

export default RecentProducts;