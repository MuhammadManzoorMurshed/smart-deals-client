import React from 'react';

const MyProduct = () => {
    return (
        <tr className='border border-gray-100'>
            <td className='p-4 text-[#001931] font-normal text-base leading-5.5'>SL. NO.</td>
            <td className='p-4 text-[#001931] font-normal text-base leading-5.5'>
                <img className='bg-gray-200 w-15 h-10 rounded-sm' src={null} alt="" />
            </td>
            <td className='p-4 text-[#001931] font-normal text-base leading-5.5'>Product Name</td>
            <td className='p-4 text-[#001931] font-normal text-base leading-5.5'>Category</td>
            <td className='p-4 text-[#001931] font-normal text-base leading-5.5'>Price</td>
            <td className='p-4 text-[#001931] font-normal text-base leading-5.5'><span className='bg-[#FFC107] rounded-full px-2.5 py-1.5'>Pending</span></td>
            <td className='p-4 text-[#001931] font-normal text-base leading-5.5 w-75'>
                <div className='flex justify-between'>
                    <button className='btn border-2 border-gradient'><span className='text-gradient'>Edit</span></button>
                    <button className='btn mx-2 border-2 border-[#FF3D00] text-[#FF3D00]'>Delete</button>
                    <button className='btn border-2 border-[#4CAF50] text-[#4CAF50]'>Make Sold</button>
                </div>
            </td>
        </tr>
    );
};

export default MyProduct;