import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <header className='max-w-360 mx-auto'>
                <Navbar />
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default RootLayout;