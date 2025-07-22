import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (


        <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-700  ">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between flex items-center justify-between">
                <span className="sm:text-sm text-[10px] text-gray-500 sm:text-center dark:text-gray-400">© 2025 CricZone™ All Rights Reserved.
                </span>
                <ul className="flex items-center  sm:text-sm text-[10px] font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <NavLink to="/" className=" hover:text-blue-800">Live Scores</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className=" hover:text-blue-800 ms-6">About</NavLink>
                    </li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer
