import React, { useMemo, useEffect } from 'react'
import MatchCard from '../MatchCard/MatchCard'
import { useMatch } from '../../context/matchDetails/matchDetails';
import { useLocation } from 'react-router-dom';
import img1 from '../../assets/img/img1.webp'
import img2 from '../../assets/img/img2.webp'
import img3 from '../../assets/img/img3.webp'



function Home() {

    const { matches, fetchMatches } = useMatch();
    const sortedMatches = [...(matches.data ?? [])].sort((a, b) => a.matchEnded - b.matchEnded)
    const finalMatches = [...sortedMatches].filter((match) => !(match.score.length === 0))


    const location = useLocation();
    useEffect(() => {

        if (location.pathname === "/") {

            fetchMatches();
        }


    }, [])

    return (
        <>

            <div className=' p-4 sm:mt-[100px] mt-20'>

                <div className='sm:grid sm:grid-cols-12 gap-5'>
                    <div className="sm:col-span-6">
                        {finalMatches.length === 0 ? (
                            <div className="flex justify-center items-center h-[500px]">
                                <div className="rounded-full h-20 w-20 bg-white animate-ping"></div>
                            </div>
                        ) : (
                            <div className="sm:grid sm:grid-cols-2 gap-4 justify-items-center align-items-center">
                                {finalMatches.map((match) => (
                                    <MatchCard key={match.id} match={match} />
                                ))}
                            </div>
                        )}
                    </div>

                    <div className='sm:block hidden sm:col-span-6 mt-5'>

                        <img className='w-full h-auto rounded-xl' src={img1} alt="" />
                        <img className='w-full h-auto rounded-xl mt-42' src={img2} alt="" />
                        <img className='w-full h-auto rounded-xl mt-42' src={img3} alt="" />

                    </div>



                </div>
            </div>
        </>
    )
}

export default Home
