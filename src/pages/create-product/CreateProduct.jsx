import React from 'react';
import Heading from '../../components/heading/Heading';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import CreateProductForm from '../../components/create-product-form/CreateProductForm';

const CreateProduct = () => {
    const headingTitle = {
        part1: "Create",
        part2: "A Products"
    }

    return (
        <div className='bg-[#f5f5f5] py-20'>
            <div className='max-w-360 mx-auto'>
                <Link to={"/"} className='flex items-center justify-center font-medium text-xl'>
                    <FaArrowLeft />
                    <span>&nbsp;Back to Products</span>
                </Link>
                <div className='mt-4 mb-10'>
                    <Heading headingTitle={headingTitle} />
                </div>

                <CreateProductForm />
            </div>
        </div>
    );
};

export default CreateProduct;