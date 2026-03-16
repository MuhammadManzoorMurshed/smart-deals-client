import React, { useEffect, useRef, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { useLoaderData, useLocation } from 'react-router'
import MyBidsTableHeader from '../../components/my-bids-table-header/MyBidsTableHeader';
import MyBid from '../../components/my-bid/MyBid';
import BidModal from '../../components/bid-modal/BidModal';
import Heading from '../../components/heading/Heading';
import axios from 'axios';

const ProductDetails = () => {
    const location = useLocation();
    const productDetails = useLoaderData();
    console.log("Product Details: ", productDetails);
    const bidModalRef = useRef(null);
    const [bids, setBids] = useState([]);
    // const {_id: productId} = useLoaderData();

    const headingTitle = {
        part1: " Bids For This Products: ",
        part2: bids.length
    }

    const { _id: productId, title, image, condition, usage, description, category, price_max: maxPrice, price_min: minPrice, created_at: createdAt, seller_image: sellerImage, seller_name: sellerName, email: sellerEmail, location: sellerLocation, seller_contact: sellerContact, status } = productDetails;

    const productInfoForBid = {
        image,
        title,
        price_max: maxPrice,
    }

    useEffect(() => {
        axios.get(`https://smart-deals-server-three.vercel.app/products/${productId}/bids`)
            .then(data => {
                console.log("After axios get: ", data);

                setBids(data.data);
            })
    }, [productId])

    // useEffect(() => {
    //     fetch(`https://smart-deals-server-three.vercel.app/products/${productId}/bids`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log("The bids for the product: ", data);
    //         setBids(data);
    //     })
    // }, [productId])

    const handleBidModalOpen = () => {
        bidModalRef.current.showModal()
    }

    const addBid = (bid) => {
        setBids(prev => [...prev, bid]);
    }

    return (
        <div>
            <div className='flex justify-between items-center gap-10'>
                {/* Left Part */}
                <div className='flex-2/5'>
                    <div className='w-150 h-125 bg-amber-50 rounded-lg '>
                        <img className="w-full h-full object-cover rounded-md" src={image} alt="" />
                    </div>
                    <div className='bg-white rounded-lg p-6 mt-8'>
                        <h3 className='font-semibold text-2xl text-[#001931] mb-6'>Product Description</h3>
                        <div className='flex justify-between'>
                            <p className='font-semibold text-base leading-5.5 '><span className='text-gradient'>Condition: </span>{condition}</p>
                            <p className='font-semibold text-base leading-5.5 '><span className='text-gradient'>Usage Time: </span><span>{usage}</span></p>
                        </div>
                        <hr className='text-black/25 mt-3 mb-6' />

                        <p className='font-medium text-base text-[#969A9D] text-justify'>
                            <span>{description}&nbsp;</span>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                            Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    </div>
                </div>

                {/* Right Part */}
                <div className='flex-3/5 space-y-4'>
                    <div className='space-y-4'>
                        <p className='flex justify-start items-center gap-2 font-medium text-xl text-[#001931]'>
                            <FaArrowLeft />
                            <span>Back to Products</span>
                        </p>
                        <h2 className='font-bold text-5xl text-[#001931]'>{title}</h2>
                        <p className='inline font-medium text-sm bg-gradient-secondary px-4.5 py-2 rounded-full'><span className='text-gradient inline-block'>{category}</span></p>
                    </div>

                    <div className='space-y-6'>
                        <div className='p-6 bg-white rounded-lg'>
                            <h3 className='font-bold text-[28px] text-[#4CAF50]'>$ <span>{maxPrice}</span> - <span>{minPrice}</span></h3>
                            <p className='font-normal text-base text-[#001931] mt-1.5'>Price starts from </p>
                        </div>

                        <div className='p-6 bg-white rounded-lg'>
                            <h3 className='font-bold text-[28px] text-[#001931]'>Product Details</h3>
                            <p className='mt-6 mb-3 font-normal text-base text-[#001931]'><span className='font-semibold'>Product ID: </span>{productId}</p>
                            <p className='font-normal text-base text-[#001931]'><span className='font-semibold'>Posted: </span>{createdAt}</p>
                        </div>

                        <div className='p-6 bg-white rounded-lg'>
                            <h3 className='font-bold text-[28px] text-[#001931]'>Seller Information</h3>
                            <div className='flex justify-start items-center gap-4 mt-6 mb-4'>
                                <img className='w-14 h-14 object-cover rounded-full bg-gray-200' src={sellerImage} alt="" />
                                <div>
                                    <p className='font-bold text-base text-[#001931]'>{sellerName}</p>
                                    <p className='font-normal text-sm text-[#001931]'>{sellerEmail}</p>
                                </div>
                            </div>
                            <p className='font-normal text-base text-[#001931]'><span className='font-semibold'>Location: </span>{sellerLocation}</p>
                            <p className='font-normal text-base text-[#001931] my-3'><span className='font-semibold'>Contact: </span>{sellerContact}</p>
                            <p className='font-semibold text-base text-[#001931]'>Status: <span className='font-normal bg-[#FFC107] px-2.5 py-1.5 rounded-full'>{status}</span></p>
                        </div>

                        <button onClick={handleBidModalOpen} className='rounded-lg w-full font-semibold text-xl p-4 bg-gradient-primary cursor-pointer'><span className='text-white'>I Want To Buy This Product</span></button>

                        <BidModal bidModalRef={bidModalRef} addBid={addBid} />
                    </div>
                </div>
            </div>

            <div className='mt-20'>
                <Heading headingTitle={headingTitle} />
                <table className='w-full overflow-x-auto bg-white mt-10'>
                    <MyBidsTableHeader prevLocation={{ state: location.pathname }} />

                    {
                        bids.sort((a, b) => b.bid_price - a.bid_price).map((bid, index) => {
                            return <MyBid key={bid._id} index={index} bid={bid} productInfoForBid={productInfoForBid} prevLocation={{ state: location.pathname }} />
                        })
                    }
                </table>
            </div>
        </div>
    );
};

export default ProductDetails;