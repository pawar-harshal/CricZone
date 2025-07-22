import React from 'react'
import { Link } from 'react-router-dom'
import { GiCricketBat } from "react-icons/gi";
import logoimg from "../../assets/img/CricZone_logo.png"



function Navbar() {
    return (


        <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900" style={{
            borderBottom: "0.1px solid rgba(255, 255, 255, 0.5)"
        }}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                <Link to="/" className="flex items-center gap-2  rtl:space-x-reverse">
                    {/* <GiCricketBat className=' text-white h-5 w-5 ' /> */}

                    {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CricZone</span> */}
                    <img src={logoimg} alt="" className=' h-10 w-full' />

                </Link>

                <div className="hidden w-full md:block md:w-auto">
                    <ul className="text-base flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link className="block py-2 px-3  text-white bg-blue-700 rounded-sm md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white hover:text-blue-800" to="/">Live Scores</Link>
                        </li>
                        <li>
                            <Link className="block py-2 px-3  text-white bg-blue-700 rounded-sm md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white hover:text-blue-800" to="/about">About</Link>
                        </li>


                    </ul>
                </div>
            </div>
        </nav >

    )
}

export default Navbar
