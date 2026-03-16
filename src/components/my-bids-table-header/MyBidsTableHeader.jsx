import React from 'react';

const MyBidsTableHeader = ({ prevLocation = "" }) => {
    return (
        <thead className='bg-[#f8f8f8] text-left border border-gray-100'>
            <tr>
                <th className='px-4 py-3 text-[#001931] font-semibold text-[18px] leading-6.5'>SL. NO.</th>
                <th className='px-4 py-3 text-[#001931] font-semibold text-[18px] leading-6.5'>Product</th>
                <th className='px-4 py-3 text-[#001931] font-semibold text-[18px] leading-6.5'>Seller</th>
                <th className='px-4 py-3 text-[#001931] font-semibold text-[18px] leading-6.5'>Bid Price</th>
                {
                    prevLocation ? "" : <th className='px-4 py-3 text-[#001931] font-semibold text-[18px] leading-6.5'>Status</th>
                }
                <th className='px-4 py-3 text-[#001931] font-semibold text-[18px] leading-6.5'>Actions</th>
            </tr>
        </thead>
    );
};

export default MyBidsTableHeader;