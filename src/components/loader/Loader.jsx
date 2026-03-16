import React from 'react';

const Loader = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <span className="loading loading-spinner text-error"></span>
        </div>
    );
};

export default Loader;