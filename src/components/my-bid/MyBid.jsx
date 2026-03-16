import React from 'react';
import AuthContext from '../../contexts/AuthContext';
import Swal from 'sweetalert2'

const MyBid = ({ index, bid = "", productInfoForBid = "", prevLocation = "", setBids = "" }) => {
    console.log("Previous Location: ", prevLocation);
    console.log("Bid: ", bid);
    console.log("Bid index: ", index);
    const { buyer_image, buyer_name, buyer_email, bid_price } = bid;
    const { image, title, price_max } = productInfoForBid;

    const handleRemoveBid = (id) => {
        console.log("ID: ", id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://smart-deals-server-three.vercel.app/products/my-bids/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your bid has been deleted.",
                                icon: "success"
                            });
                        }

                        setBids(id);
                    })
                    .catch(error => {
                        console.log("Having error deleting the bid: ", error);
                    })
            }
        });
    }

    return (
        <tbody>
            <tr className='border-2 border-gray-100'>
                <td className='p-4 text-[#001931] font-normal text-base leading-5.5'>{index + 1}</td>
                <td className='p-4 text-[#001931] font-normal text-base leading-5.5'>
                    <div className='flex gap-3 items-center'>
                        <img className='bg-gray-200 w-15 h-10 rounded-sm' src={image} alt="" />
                        <div>
                            <p className='font-normal text-base leading-5.5'>{title}</p>
                            <p className='font-normal text-sm'>$ {price_max}</p>
                        </div>
                    </div>
                </td>
                <td className='p-4 text-[#001931] font-normal text-base leading-5.5'>
                    <div className='flex gap-3 items-center'>
                        <img className='bg-gray-200 w-10 h-10 rounded-full' src={buyer_image} alt="" />
                        <div>
                            <p className='font-normal text-base leading-5.5'>{buyer_name}</p>
                            <p className='font-normal text-sm'>{buyer_email}</p>
                        </div>
                    </div>
                </td>
                <td className='p-4 text-[#001931] font-normal text-base leading-5.5'>{bid_price}</td>
                {
                    prevLocation ? "" : <td className='p-4 text-[#001931] font-normal text-base leading-5.5'><span className='bg-[#FFC107] rounded-full px-2.5 py-1.5'>Pending</span></td>
                }
                <td className={`p-4 text-[#001931] font-normal text-base leading-5.5 ${prevLocation ? 'w-75' : 'w-40'}`}>
                    {
                        prevLocation ?
                            <div className='flex justify-between items-center'>
                                <button className='btn border-2 border-[#4CAF50] text-[#4CAF50]'>Accept Offer</button>
                                <button className='btn border-2 border-[#FF3D00] text-[#FF3D00]'>Reject Offer</button>
                            </div> :
                            <div className=''>
                                <button onClick={() => handleRemoveBid(bid._id)} className='btn border-2 border-[#FF3D00] text-[#FF3D00]'>Remove Bid</button>
                            </div>
                    }
                </td>
            </tr>
        </tbody>
    );
};

export default MyBid;