import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import ScrollToTopButton from './ScrollToTopButton';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <ScrollToTop />
            <Navbar />
            <main className="flex-grow pt-20">
                {children}
            </main>
            <Footer />
            <ScrollToTopButton />
        </div>
    );
};

export default Layout;
