import React from 'react';
import AuthContext from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import SignInWithGoogle from '../../components/sign-in-with-google/SignInWithGoogle';

const Register = () => {

    return (
        <div className="card bg-base-100 w-full mx-auto max-w-lg shrink-0 shadow-2xl p-4 my-20">
            <h1 className="text-4xl font-semibold text-center">Register now!</h1>
            <div className="card-body">
                <p className='text-center font-normal text-lg leading-6 text-[#001931] mb-6'>Already have an account? <Link className='text-gradient' to="/login">Login</Link> now!</p>
                <form action="">
                    <fieldset className="fieldset space-y-4">
                        {/* Name */}
                        <label className='label font-medium text-sm leading-5 text-[#001931]' htmlFor="name">Name</label>
                        <input type="text" className='input placeholder:font-normal placeholder:text-base placeholder:leading-6 border-[#E9E9E9] w-full' name="name" id="name" placeholder='Name' />

                        {/* Email */}
                        <label className='label font-medium text-sm leading-5 text-[#001931]'>Email</label>
                        <input type="email" className="input placeholder:font-normal placeholder:text-base placeholder:leading-6 border-[#E9E9E9] w-full" placeholder="Email" />

                        {/* Image URL */}
                        <label className='label font-medium text-sm leading-5 text-[#001931]' htmlFor="image">Image URL</label>
                        <input type="url" className='input placeholder:font-normal placeholder:text-base placeholder:leading-6 border-[#E9E9E9] w-full' name="image" id="image" placeholder='Image URl' />

                        {/* Password */}
                        <label className='label font-medium text-sm leading-5 text-[#001931]'>Password</label>
                        <input type="password" className="input placeholder:font-normal placeholder:text-base placeholder:leading-6 border-[#E9E9E9] w-full" placeholder="Password" />
                        {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                        <button className="btn bg-gradient-primary mt-2"><span className='text-white'>Register</span></button>
                    </fieldset>
                </form>
                <div className='flex items-center text-[#E9E9E9] my-6'>
                    <hr className='border w-full' />
                    <span className='font-semibold text-base text-[#001931]'>&nbsp;&nbsp;OR&nbsp;&nbsp;</span>
                    <hr className='border w-full text-[#E9E9E9]' />
                </div>

                <SignInWithGoogle />
            </div>
        </div>
    );
};

export default Register;