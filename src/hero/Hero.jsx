import React from 'react';
import bgHeroLeftImage from './../assets/bg-hero-left.png';
import bgHeroRightImage from './../assets/bg-hero-right.png';
import {IoSearch} from 'react-icons/io5'

const Hero = () => {
    return (
        <div className='py-20 text-center' style={
            {
                backgroundImage: `url(${bgHeroLeftImage}), url(${bgHeroRightImage}), var(--gradient-secondary)`,
                backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
                backgroundPosition: 'left center, right center, center'

            }
        }>
            <h2 className='font-bold text-7xl leading-21'>Deal your <span className='text-gradient'>Products</span></h2>
            <h2 className='font-bold text-7xl leading-21'>in a <span className='text-gradient'>Smart</span> way!</h2>
            <p className='font-normal text-[20px] leading-7.5 text-[#627382] mt-4'>SmartDeals helps you sell, resell, and shop from trusted local sellers — all in one place!</p>

            <div className='flex justify-center items-center my-8 shadow-xl rounded-full w-137.5 mx-auto'>
                <input className='bg-white p-4 rounded-tl-full rounded-bl-full w-125' type="search" name="" id="" placeholder='Search For Products, Categoriees...'/>
                <button className='bg-gradient-primary p-4 rounded-tr-full rounded-br-full'><IoSearch className='text-white w-6 h-6' /></button>
            </div>

            <div className='flex gap-4 justify-center items-center'>
                <button className='bg-gradient-primary text-white px-4 py-3 rounded-md font-semibold text-base'>Watch All Products</button>
                <button className='border-2 border-gradient px-4 py-3 rounded-md font-semibold text-base'><span className='text-gradient'>Post an Product</span></button>
            </div>
        </div>
    );
};

export default Hero;