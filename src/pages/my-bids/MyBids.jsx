import React, { Suspense, useContext, useEffect, useState } from 'react';
import MyBid from '../../components/my-bid/MyBid';
import Heading from '../../components/heading/Heading';
import MyBidsTableHeader from '../../components/my-bids-table-header/MyBidsTableHeader';
import AuthContext from '../../contexts/AuthContext';
import Loader from '../../components/loader/Loader';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const MyBids = () => {
    const { user, loading } = useContext(AuthContext);
    const [myBids, setMyBids] = useState([]);
    const [badeProducts, setBadeProducts] = useState([]);
    const [bidsLoading, setBidsLoading] = useState(true);
    const axiosSecureInstance = useAxiosSecure();
    let len = 0;

    const headingTitle = {
        part1: "My Bids: ",
        part2: myBids.length,
    }

    useEffect(() => {

        if (!user?.email) {
            return;
        }

        console.log("Token: ", user.accessToken);

        const fetchData = async () => {
            try {
                const resBids = await axiosSecureInstance.get(`/products/my-bids?email=${user.email}`);
                const bidsData = resBids.data;
                setMyBids(bidsData);

                if (bidsData.length > 0) {
                    const resBadeProducts = await axiosSecureInstance.get(`/products/my-bade-products?email=${user.email}`);
                    setBadeProducts(resBadeProducts.data);
                }
            } catch (error) {
                console.error("Having error in My Bids:", error);
            } finally {
                setBidsLoading(false);
            }
        }

        fetchData();

    }, [user, axiosSecureInstance]);

    // useEffect(() => {

    //     if (!user?.email) {
    //         return;
    //     }

    //     console.log("Token: ", user.accessToken);

    //     const fetchData = async () => {
    //         try {
    //             const resBids = await fetch(`http://localhost:5000/products/my-bids?email=${user.email}`, {
    //                 headers: {
    //                     authorization: `Bearer ${localStorage.getItem('token')}`
    //                 }
    //             });
    //             const bidsData = await resBids.json();
    //             setMyBids(bidsData);

    //             if (bidsData.length > 0) {
    //                 const resBadeProducts = await fetch(`http://localhost:5000/products/my-bade-products?email=${user.email}`)
    //                 const badeProducts = await resBadeProducts.json();
    //                 setBadeProducts(badeProducts);
    //             }
    //         } catch (error) {
    //             console.error("Having error in My Bids:", error);
    //         } finally {
    //             setBidsLoading(false);
    //         }
    //     }

    //     fetchData();

    // }, [user]);

    // useEffect(() => {
    //     console.log("useEffect ran, user:", user?.email);
    //     console.log("Type:", typeof user?.email);
    //     console.log("Condition:", !!user?.email);

    //     if (!user?.email) {
    //         return;
    //     }

    //     console.log("Token: ", user.accessToken);

    //     const fetchData = async () => {
    //         try {
    //             const resBids = await fetch(`http://localhost:5000/products/my-bids?email=${user.email}`, {
    //                 headers: {
    //                     authorization: `Bearer ${user.accessToken}`
    //                 }
    //             });
    //             const bidsData = await resBids.json();
    //             setMyBids(bidsData);

    //             if (bidsData.length > 0) {
    //                 const resBadeProducts = await fetch(`http://localhost:5000/products/my-bade-products?email=${user.email}`)
    //                 const badeProducts = await resBadeProducts.json();
    //                 setBadeProducts(badeProducts);
    //             }
    //         } catch (error) {
    //             console.error("Having error in My Bids:", error);
    //         } finally {
    //             setBidsLoading(false);
    //         }
    //     }

    //     fetchData();

    // }, [user?.email, user?.accessToken]);

    console.log("My Bids: ", myBids);
    console.log("My Bade Products: ", badeProducts);

    if (loading || bidsLoading) {
        return <Loader />
    }

    const setBids = (id) => {
        const remainingBids = myBids.filter(myBid => myBid._id !== id);
        setMyBids(remainingBids);
    }

    return (
        <div className='bg-[#f5f5f5] py-20'>
            <Heading headingTitle={headingTitle} />
            <div className='max-w-360 mx-auto bg-white mt-10 rounded-md border border-gray-200'>
                {/* <h1 className='text-3xl font-bold'>My Products</h1> */}
                <table className='w-full overflow-x-auto'>
                    <MyBidsTableHeader />
                    {
                        badeProducts.map(badeProduct => {
                            const bids = myBids.filter(myBid => badeProduct._id === myBid.product);

                            return bids.map((myBid) => (<MyBid key={myBid._id} index={len++} bid={myBid} productInfoForBid={badeProduct} setBids={setBids} />))
                        })
                    }
                </table>
            </div>
        </div>
    );
};

export default MyBids;