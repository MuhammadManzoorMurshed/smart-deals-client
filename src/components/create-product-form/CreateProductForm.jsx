import React from 'react';
import '../../index.css';
import useAuth from '../../hooks/useAuth';
import Loader from '../loader/Loader';
// import axios from 'axios';
import Swal from 'sweetalert2';
// import useAxios from '../../hooks/useAxios';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const CreateProductForm = () => {
    const { user, loading } = useAuth();
    // const axiosInstance = useAxios();
    const axiosSecureInstance = useAxiosSecure();

    console.log("User in CPF: ", user);

    const { displayName, email, photoURL } = user;

    const handleCreateProduct = (e) => {
        e.preventDefault();

        const form = e.target;
        const productTitle = form.title.value;
        const productCategory = form.category.value;
        const productMinPrice = form.min_price.value;
        const productMaxPrice = form.max_price.value;
        const productCondition = form.product_condition.value;
        const productUsageTime = form.product_usage_time.value;
        const productPhoto = form.photo_url.value;
        const productSellerName = form.seller_name.value;
        const productSellerEmail = form.seller_email.value;
        const productSellerContact = form.seller_contact.value;
        const productSellerPhoto = form.seller_image_url.value;
        const productSellerLocation = form.location.value;
        const productDescription = form.description.value;

        console.log(productTitle, productCategory, productMinPrice, productMaxPrice, productCondition, productUsageTime, productPhoto, productSellerName, productSellerEmail, productSellerContact, productSellerPhoto, productSellerLocation, productDescription);

        const newProduct = {
            title: productTitle,
            category: productCategory,
            price_min: productMinPrice,
            price_max: productMaxPrice,
            condition: productCondition,
            usage: productUsageTime,
            image: productPhoto,
            seller_name: productSellerName,
            email: productSellerEmail,
            seller_contact: productSellerContact,
            seller_image: productSellerPhoto,
            location: productSellerLocation,
            description: productDescription
        }

        // axios.post('https://smart-deals-server-three.vercel.app/products', newProduct)
        // .then(data => {
        // console.log("Product Created: ", data);

        // if(data.data.insertedId) {
        //     Swal.fire({
        //         title: "Created!",
        //         text: "Your product has been created successfully.",
        //         icon: "success"
        //       });
        // }
        // })

        axiosSecureInstance.post('/products', newProduct)
            .then(data => {
                console.log("Product Created: ", data);

                if (data.data.insertedId) {
                    Swal.fire({
                        title: "Created!",
                        text: "Your product has been created successfully.",
                        icon: "success"
                    });
                }
            })
            .catch(error => {
                alert("Product not created!");;
                console.log("Product not created! - ", error);
            })
    }

    if (loading) {
        return <Loader />
    }

    return (
        <form onSubmit={handleCreateProduct} action="" className='bg-white rounded-lg max-w-200 mx-auto h-auto flex flex-col gap-6 p-10'>
            {/* Row-1 */}
            <div className='flex gap-4'>
                <div className='flex-1'>
                    <label className='font-medium text-sm leading-5 text-[#001931]' htmlFor="title">Title</label> <br />
                    <input className='input w-full mt-1.5 placeholder:font-normal placeholder:text-base placeholder:leading-6' type="text" name="title" id="title" placeholder='e.g. Yamaha Fz Guitar for Sale' />
                </div>
                <div className='flex-1'>
                    <label htmlFor="category" className='font-medium text-sm leading-5 text-[#001931]'>Category</label> <br />
                    <select defaultValue="" className='select w-full font-normal text-base leading-6 mt-1.5' name="category" id="category">
                        <option className='' value="" disabled>Select a Category</option>
                        <option value="cat1">Category1</option>
                        <option value="cat2">Category2</option>
                        <option value="cat3">Category3</option>
                    </select>
                </div>
            </div>

            {/* Row-2 */}
            <div className='flex gap-4'>
                <div className='flex-1'>
                    <label htmlFor="min-price" className='font-medium text-sm leading-5 text-[#001931]'>Min Price You want to Sale ($)</label> <br />
                    <input className='input w-full mt-1.5 placeholder:font-normal placeholder:text-base placeholder:leading-6' type="number" name="min_price" id="min-price" placeholder='e.g. 18.5' />
                </div>

                <div className='flex-1'>
                    <label htmlFor="max-price" className='font-medium text-sm leading-5 text-[#001931]'>Max Price You want to Sale ($)</label> <br />
                    <input className='input w-full mt-1.5 placeholder:font-normal placeholder:text-base placeholder:leading-6' type="number" name="max_price" id="min-price" placeholder='Optional (default = Min Price)' />
                </div>
            </div>

            {/* Row-3 */}
            <div className='flex gap-4'>
                <div className='flex-1'>
                    <label htmlFor="product-condition" className='font-medium text-sm leading-5 text-[#001931] inline-block mb-1.5'>Product Condition</label> <br />
                    <div className='flex justify-start items-center gap-5'>
                        <div className='flex justify-start items-center gap-2.5'>
                            <input className='appearance-none w-6 h-6 rounded-full border-6 border-[#E2E2E2] checked:border-[#632ee3] cursor-pointer' type="radio" name="product_condition" id="brand-new" value='brand-new' />
                            <label htmlFor="brand-new" className='cursor-pointer font-medium text-sm leading-5 text-[#001931]'>Brand New</label>
                        </div>
                        <div className='flex justify-start items-center gap-2.5'>
                            <input className='appearance-none w-6 h-6 rounded-full border-6 border-[#e2e2e2] checked:border-[#632ee3]' type="radio" name="product_condition" id="used" value='used' />
                            <label htmlFor="used" className='cursor-pointer font-medium text-sm leading-5 text-[#001931]'>Used</label>
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <label htmlFor="product-usage-time" className='font-medium text-sm leading-5 text-[#001931]'>Product Usage Time</label>
                    <input className='input w-full mt-1.5 placeholder:font-normal placeholder:text-base placeholder:leading-6' type="text" name="product_usage_time" id="product-usage-time" placeholder='e.g. 1 year 3 month' />
                </div>
            </div>

            {/* Row-4 */}
            <div>
                <label htmlFor="photo-url" className='font-medium text-sm leading-5 text-[#001931]'>Your Product Image URL</label> <br />
                <input className='input w-full mt-1.5 placeholder:font-normal placeholder:text-base placeholder:leading-6' type="url" name="photo_url" id="photo-url" placeholder='https://...' />
            </div>

            {/* Row-5 */}
            <div className='flex gap-4'>
                <div className='flex-1'>
                    <label htmlFor="seller-name" className='font-medium text-sm leading-5 text-[#001931]'>Seller Name</label>
                    <input className='input w-full mt-1.5 placeholder:font-normal placeholder:text-base placeholder:leading-6' type="text" name="seller_name" id="seller-name" defaultValue={displayName} readOnly />
                </div>
                <div className='flex-1'>
                    <label htmlFor="seller-email" className='font-medium text-sm leading-5 text-[#001931]'>Seller Email</label>
                    <input className='input w-full mt-1.5 placeholder:font-normal placeholder:text-base placeholder:leading-6' type="text" name="seller_email" id="seller-email" defaultValue={email} readOnly />
                </div>
            </div>

            {/* Row-6 */}
            <div className='flex gap-4'>
                <div className='flex-1'>
                    <label htmlFor="seller-contact" className='font-medium text-sm leading-5 text-[#001931]'>Seller Contact</label>
                    <input className='input w-full mt-1.5 placeholder:font-normal placeholder:text-base placeholder:leading-6' type="tel" name="seller_contact" id="seller-contact" placeholder='e.g. +1-555-1234' />
                </div>
                <div className='flex-1'>
                    <label htmlFor="seller-image-url" className='font-medium text-sm leading-5 text-[#001931]'>Seller Image URL</label>
                    <input className='input w-full mt-1.5 placeholder:font-normal placeholder:text-base placeholder:leading-6' type="url" name="seller_image_url" id="seller-image-url" defaultValue={photoURL} readOnly />
                </div>
            </div>

            {/* Row-7 */}
            <div>
                <label htmlFor="location" className='font-medium text-sm leading-5 text-[#001931]'>Location</label> <br />
                <input className='input w-full mt-1.5 placeholder:font-normal placeholder:text-base placeholder:leading-6' type="text" name="location" id="location" placeholder='City, Country' />
            </div>

            {/* Row-8 */}
            <div>
                <label htmlFor="description" className='font-medium text-sm leading-5 text-[#001931]'>Simple Description about your Product</label> <br />
                <textarea className='border-2 textarea w-full mt-1.5 placeholder:font-normal placeholder:text-base placeholder:leading-6' name="description" id="description" cols='100' rows='5' placeholder='e.g. I bought this product 3 month ago. did not used more than 1/2 time. actually learning
 guitar is so tough..... '></textarea>
            </div>

            {/* Row-9 */}
            <div>
                <button className='bg-gradient-primary py-5 w-full font-semibold text-base rounded-lg cursor-pointer'><span className='text-white'>Create A Product</span></button>
            </div>
        </form>
    );
};

export default CreateProductForm;