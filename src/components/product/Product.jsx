import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ recentProduct = "" }) => {
    console.log("Product: ", recentProduct);
    const navigateTo = useNavigate();

    const {_id, image, title, price_max, price_min} = recentProduct;

    return (
        <div className='p-4 shadow-sm rounded-lg bg-white'>
            <img className='w-full h-68.75 rounded-2xl bg-gray-200 mb-4' src={image} alt="Product image" />
            <p className='inline bg-gradient-with-opacity rounded-full px-2.5 py-1.5 font-medium text-[12px]'><span className='text-gradient'>On Sale</span></p>
            <h3 className='font-medium text-2xl text-[#001931] my-2'>{title}</h3>
            <p className='font-semibold text-[20px] text-gradient mb-4'>$ <span>{price_max}</span>-<span>{price_min}</span></p>
            <button onClick={() => navigateTo(`/all-products/product-details/${_id}`)} className='border-2 border-gradient px-4 py-3 rounded-md w-full'><span className='text-gradient font-semibold text-base cursor-pointer'>View Details</span></button>
        </div>
    );
};

export default Product;