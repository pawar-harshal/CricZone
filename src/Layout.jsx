import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import bgImg from './assets/img/img3.webp';
import Footer from './components/Footer/Footer';

function Layout() {


    return (
        <div className="relative min-h-screen overflow-hidden">
            <div
                className="sm:hidden absolute inset-0 -z-10"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(${bgImg})`,
                    backgroundSize: "contain",
                    filter: "blur(4px)",
                    width: "100%",
                }}></div>


            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
