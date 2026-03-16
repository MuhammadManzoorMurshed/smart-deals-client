import React from 'react';
import Heading from '../../components/heading/Heading';
import Product from '../../components/product/Product';
import { Outlet, useParams } from 'react-router-dom';

const AllProducts = () => {
    const {id} = useParams();
    const headingTitle = {
        part1: "All",
        part2: "Products"
    }

    return (
        <div className='bg-[#f5f5f5]'>
            <div className='max-w-360 mx-auto py-20'>
                {
                    id ? <Outlet /> :
                        <>
                            <Heading headingTitle={headingTitle} />
                            <div className='grid grid-cols-3 gap-6 my-10'>
                                {
                                    Array.from({ length: 12 }).map((_, i) => {
                                        return <Product key={i} />
                                    })
                                }
                            </div>
                        </>
                }
            </div>
        </div>
    );
};

export default AllProducts;