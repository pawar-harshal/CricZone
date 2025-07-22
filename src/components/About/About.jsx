import React from 'react';
import { GiCricketBat } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';


function About() {
    return (
        <section className="min-h-screen px-4 py-2 sm:px-8 lg:px-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 sm:pt-10 mt-25 rounded-3xl m-5 flex flex-col justify-between ">
            <div className="max-w-6xl mx-auto text-center space-y-6">
                <div>
                    <div className="flex justify-center">
                        <GiCricketBat className="text-green-600 dark:text-green-400 h-10 w-10 animate-pulse" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold mb-20">About CricZone</h2>

                    <p className="text-sm sm:text-lg leading-relaxed text-justify">
                        <strong>CricZone</strong> is your ultimate destination for live cricket scores, match updates — all in one fast, responsive dashboard. Whether it's an international
                        clash or a domestic tournament, we bring real-time action directly to your screen.
                    </p>

                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-justify">
                        CricZone combines performance with elegance.
                        Our mission is to make cricket tracking accessible, sleek, and enjoyable for fans across the globe.
                    </p>

                    <div className="mt-6">
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                            Designed for fans. Powered by passion.
                        </p>
                    </div>
                </div>

                <div className=' text-sm text-gray-800 bg-amber-100 p-2 rounded-3xl flex  flex-col  justify-center items-center '>
                    <div>Built with passion by  <strong>Harshal Pawar</strong> </div>
                    <div>
                        <Link to="https://github.com/pawar-harshal" className='' ><FaGithub className=' h-9 w-9' /></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
