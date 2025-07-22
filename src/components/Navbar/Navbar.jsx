import React from 'react'
import { Link } from 'react-router-dom'
import { GiCricketBat } from "react-icons/gi";
import logoimg from "../../assets/img/CricZone_logo.png"



function Navbar() {
    return (


        <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 border-b border-white/30">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center gap-2">
                    <img src={logoimg} alt="Logo" className="h-10 w-full" />
                </Link>

                <div className="hidden w-full md:block md:w-auto">
                    <ul className="text-base flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-800 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-900">
                        <li>
                            <Link className="block py-2 px-3 text-white hover:text-blue-400" to="/">Live Scores</Link>
                        </li>
                        <li>
                            <Link className="block py-2 px-3 text-white hover:text-blue-400" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default Navbar
