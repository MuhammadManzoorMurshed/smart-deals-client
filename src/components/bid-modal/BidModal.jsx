import React, { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import { useLoaderData } from 'react-router';
import Loader from '../loader/Loader';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const BidModal = ({ bidModalRef, addBid }) => {
    const { user, loading } = useContext(AuthContext);
    const { _id: productID } = useLoaderData();

    if (loading) {
        return <Loader />
    }

    console.log("User: ", user);

    const { displayName, email } = user;

    const MySwal = withReactContent(Swal);

    const successAlert = () => {
        MySwal.fire({
            title: "Your bid is successfully submitted!",
            icon: "success",
            draggable: true
        });
    }

    const handleBidSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const buyerName = form.buyer_name.value;
        const buyerEmail = form.buyer_email.value;
        const buyerImage = form.buyer_image.value;
        const bidPrice = form.bid_price.value;
        const contact = form.contact.value;
        const status = 'pending';

        console.log(productID, buyerName, buyerEmail, buyerImage, bidPrice, contact, status);

        const bid = {
            product: productID,
            buyer_image: buyerImage,
            buyer_name: buyerName,
            buyer_contact: contact,
            buyer_email: buyerEmail,
            bid_price: bidPrice,
            status: status
        };

        fetch('https://smart-deals-server-three.vercel.app/bids', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(bid)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Bid data after inserted to database: ", data);

                if (data.insertedId) {
                    addBid(bid);
                    successAlert();
                    bidModalRef.current.close();
                }
            })
    }

    return (
        <dialog ref={bidModalRef} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box max-w-150">
                <h3 className="font-bold text-2xl text-center mt-12">Give Seller Your Offered Price!</h3>
                <div className="modal-action">
                    <form onSubmit={handleBidSubmit} action="" className='bg-white rounded-lg max-w-150 mx-auto h-auto flex flex-col gap-6 w-full' method="dialog">
                        {/* Row-1 */}
                        <div className='flex gap-4'>
                            <div className='flex-1'>
                                <label className='font-medium text-sm leading-5 text-[#001931]' htmlFor="buyer-name">Buyer Name</label> <br />
                                <input className='input w-full mt-1.5 placeholder:font-normal placeholder:text-base placeholder:leading-6' type="text" name="buyer_name" id="buyer-name" defaultValue={displayName} />
                            </div>
                            <div className='flex-1'>
                                <label className='font-medium text-sm leading-5 text-[#001931]' htmlFor="buyer-email">Buyer Email</label> <br />
                                <input className='input w-full mt-1.5 placeholder:font-normal placeholder:text-base placeholder:leading-6' type='email' name="buyer_email" id="buyer-email" defaultValue={email} />
                            </div>
                        </div>

                        {/* Row-2 */}
                        <div>
                            <label htmlFor="buyer-image" className='font-medium text-sm leading-5 text-[#001931]'>Buyer Image URL</label> <br />
                            <input className='input w-full mt-1.5 placeholder:font-normal placeholder:text-base placeholder:leading-6' type="url" name="buyer_image" id="buyer-image" placeholder='https://...' />
                        </div>

                        {/* Row-3 */}
                        <div>
                            <label htmlFor="bid-price" className='font-medium text-sm leading-5 text-[#001931]'>Place Your Price</label> <br />
                            <input className='input w-full mt-1.5 placeholder:font-normal placeholder:text-base placeholder:leading-6' type="number" name="bid_price" id="bid-price" placeholder='e.g. Artisan Roasters' />
                        </div>

                        {/* Row-4 */}
                        <div>
                            <label htmlFor="contact" className='font-medium text-sm leading-5 text-[#001931]'>Contact Info</label> <br />
                            <input className='input w-full mt-1.5 placeholder:font-normal placeholder:text-base placeholder:leading-6' type="tel" name="contact" id="contact" placeholder='e.g. +1-555-1234' />
                        </div>

                        {/* Row-5 */}
                        {/* if there is a button in form, it will close the modal */}
                        <div className='text-right my-12'>
                            <button onClick={() => bidModalRef.current.close()} type='button' className="btn border-2 mr-4 border-gradient"><span className='text-gradient'>Cancel</span></button>
                            <button className="btn bg-gradient-primary"><span className='text-white'>Submit Bid</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default BidModal;