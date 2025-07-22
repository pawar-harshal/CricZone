import React from 'react';
import { Link } from 'react-router-dom';

function MatchCard({ match }) {
    return (
        <Link
            to={`/match/${match.id}`}
            className="block "
        >

            <div className={`relative w-[300px] h-[300px] bg-gray-900 border border-gray-700 rounded-xl shadow-md overflow-hidden flex flex-col justify-between mt-5 ${match.matchStarted ? "snake-border" : ""}`}>

                <div className="absolute top-2 right-2 z-10">
                    <span className="bg-gray-700 text-gray-300 text-xs font-semibold px-2.5 py-0.5 rounded-sm shadow-sm">
                        {match.matchType.toUpperCase()}
                    </span>
                </div>

                <div className="absolute top-2 left-2 z-10">
                    <span className={`bg-green-700 text-gray-200 text-xs font-semibold px-2.5 py-0.5 rounded-sm shadow-sm live-indicator ${!match.matchEnded && !match.status.includes("stumps") ? "" : "hidden"}`}>
                        {!match.matchEnded ? "LIVE" : ""}
                    </span>
                </div>

                <div className="p-4 flex flex-col justify-between h-full">

                    <div className="text-sm font-semibold text-gray-200 text-center line-clamp-2 break-words max-w-[250px] mx-auto mt-4">
                        {match.name}
                    </div>

                    <div className="bg-gradient-to-r from-green-800/20 to-green-700/10 text-amber-100 p-4 rounded-md flex flex-col gap-2 text-sm sm:text-base mt-4">
                        {match.teamInfo?.map((team, index) => (
                            <div key={index} className="flex justify-between items-center">
                                <span className="flex items-center gap-2 max-w-[100px] overflow-hidden">
                                    {team.shortname ? (
                                        <>
                                            <img className="h-4 w-4 shrink-0" src={team.img} alt="" />
                                            <span className="truncate text-gray-100 font-medium">
                                                {team.shortname}
                                            </span>
                                        </>
                                    ) : (
                                        <span className="truncate text-gray-100 font-medium">
                                            {team.name}
                                        </span>
                                    )}
                                </span>
                                <span className="text-gray-200 text-sm">
                                    {match?.score?.[index]?.r !== undefined
                                        ? `${match.score[index].r} / ${match.score[index].w} (${match.score[index].o})`
                                        : "Yet to bat"}
                                </span>
                            </div>
                        ))}
                    </div>

                    <p className={`text-center pt-2 text-sm italic ${match.status === 'Match not started'
                        ? 'text-yellow-400'
                        : match.status.includes('won')
                            ? 'text-green-400'
                            : match.status.includes('cancelled')
                                ? 'text-red-400'
                                : 'text-indigo-400'
                        }`}>
                        {match.status}
                    </p>

                    <div className="text-right pt-2">
                        <span className="text-sm font-semibold text-blue-400 hover:underline">
                            VIEW DETAILS →
                        </span>
                    </div>

                </div>
            </div>


        </Link>
    );
}

export default MatchCard;
