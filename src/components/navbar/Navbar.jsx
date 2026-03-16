import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';

const Navbar = () => {
    const { user, signOutWithGoogle } = useContext(AuthContext);

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/all-products">All Products</NavLink></li>
        {
            user && <>
                <li><NavLink to="/my-products">My Products</NavLink></li>
                <li><NavLink to="/my-bids">My Bids</NavLink></li>
                <li><NavLink to="/create-product">Create Products</NavLink></li>
            </>
        }
    </>

    const handleSignOutWithGoogle = () => {
        signOutWithGoogle()
            .then(() => {
                // Sign-out successful.
                alert
            })
            .catch((error) => {
                // An error happened.
                console.error("Error signing out: ", error);
            });
    }

    return (
        <div className="navbar bg-base-100 px-0 py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="font-bold text-[32px] leading-10">Smart<span className='text-gradient'>Deals</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2 font-medium text-base leading-6 text-black">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <Link onClick={handleSignOutWithGoogle} className="btn font-semibold text-base text-white py-3 bg-gradient-primary" to="/">Logout</Link> : (
                        <div className='flex gap-4'>
                            <Link className="btn font-semibold text-base border-2 border-gradient py-3" to="/login"><span className='text-gradient'>Login</span></Link>
                            <Link className="btn font-semibold text-base text-white bg-gradient-primary py-3" to="/register">Register</Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;