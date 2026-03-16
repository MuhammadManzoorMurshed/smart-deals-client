import React from 'react';
import MyProduct from '../../components/my-product/MyProduct';
import Heading from '../../components/heading/Heading';

const MyProducts = () => {
    const headingTitle = {
        part1: "My Products: ",
        part2: "10"
    }

    return (
        <div className='bg-[#f5f5f5] py-20'>
            <Heading headingTitle={headingTitle} />
            <div className='max-w-360 mx-auto bg-white mt-10 rounded-md border border-gray-200'>
                {/* <h1 className='text-3xl font-bold'>My Products</h1> */}
                <table className='w-full overflow-x-auto'>
                    <thead>
                        <tr className='bg-[#f8f8f8] text-left border border-gray-100'>
                            <th className='px-4 py-3 text-[#001931] font-semibold text-[18px] leading-6.5'>SL. NO.</th>
                            <th className='px-4 py-3 text-[#001931] font-semibold text-[18px] leading-6.5'>Image</th>
                            <th className='px-4 py-3 text-[#001931] font-semibold text-[18px] leading-6.5'>Product Name</th>
                            <th className='px-4 py-3 text-[#001931] font-semibold text-[18px] leading-6.5'>Category</th>
                            <th className='px-4 py-3 text-[#001931] font-semibold text-[18px] leading-6.5'>Price</th>
                            <th className='px-4 py-3 text-[#001931] font-semibold text-[18px] leading-6.5'>Status</th>
                            <th className='px-4 py-3 text-[#001931] font-semibold text-[18px] leading-6.5'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.from({ length: 10 }).map((_, i) => {
                                return <MyProduct key={i} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;