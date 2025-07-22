import React, { useEffect } from 'react';
import { MapPinIcon } from '@heroicons/react/24/outline';
import RefreshButton from '../RefreshButton/RefreshButton';
import { useMatch } from '../../context/matchDetails/matchDetails';
import { NavLink, useParams } from 'react-router-dom';
import { GiCricketBat } from 'react-icons/gi';
import MatchCard from '../MatchCard/MatchCard';

function MatchDetails() {

  const { matchId } = useParams();
  const { matches, fetchMatches } = useMatch();

  useEffect(() => {
    if (!matches?.data) {
      fetchMatches();
    }
  }, [matches, fetchMatches]);




  const match = matches?.data?.find((match) => match.id === matchId);


  if (!matches?.data) {
    return (
      <div className="flex justify-center items-center h-[500px] ">
        <div className="rounded-full h-20 w-20 bg-white animate-ping"></div>
      </div>
    );
  }
  if (!match) {
    return (
      <div className="min-h-screen container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        Match not found
      </div>
    );
  }




  const getBattingTeamIndex = () => {
    const scores = match.score || [];
    if (scores.length === 0) return -1;

    if (match.matchType?.toLowerCase() === 'test') {
      if (match.status?.toLowerCase().includes('stumps')) {
        const battingTeam = match.teams?.find((team) =>
          match.status.toLowerCase().includes(team.toLowerCase())
        );
        return match.teamInfo?.findIndex((team) =>
          team?.name?.toLowerCase().includes(battingTeam?.toLowerCase())
        ) || 0;
      }

      const latestInning = scores.reduce((latest, score) => {
        const inningNumber = score.inning?.match(/Inning (\d+)/)?.[1] || '1';
        const latestNumber = latest.inning?.match(/Inning (\d+)/)?.[1] || '1';
        return parseInt(inningNumber) > parseInt(latestNumber) ? score : latest;
      }, scores[0]);
      const latestTeamIndex = match.teamInfo?.findIndex((team) =>
        latestInning?.inning?.toLowerCase().includes(team?.name?.toLowerCase())
      ) || 0;

      const oversTeam1 = parseFloat(
        scores.find((s) => s?.inning?.toLowerCase().includes(match.teamInfo?.[0]?.name?.toLowerCase()))?.o || 0
      );
      const oversTeam2 = parseFloat(
        scores.find((s) => s?.inning?.toLowerCase().includes(match.teamInfo?.[1]?.name?.toLowerCase()))?.o || 0
      );
      return oversTeam1 > 0 && oversTeam2 > 0 && oversTeam1 < oversTeam2 ? 0 : latestTeamIndex;
    }

    if (match.status?.toLowerCase().includes('opt to bat')) {
      const battingTeam = match.status.split(' opt to bat')[0].toLowerCase();
      return match.teamInfo?.findIndex((team) =>
        team?.name?.toLowerCase().includes(battingTeam)
      ) || 0;
    }

    const oversTeam1 = parseFloat(
      scores.find((s) => s?.inning?.toLowerCase().includes(match.teamInfo?.[0]?.name?.toLowerCase()))?.o || 0
    );
    const oversTeam2 = parseFloat(
      scores.find((s) => s?.inning?.toLowerCase().includes(match.teamInfo?.[1]?.name?.toLowerCase()))?.o || 0
    );

    if (oversTeam1 > 0 && oversTeam2 === 0) return 0;
    if (oversTeam2 > 0 && oversTeam1 === 0) return 1;
    return oversTeam1 > oversTeam2 ? 1 : 0;
  };
  const battingTeamIndex = getBattingTeamIndex();



  const getScoreDisplay = (teamName) => {
    if (match.status?.toLowerCase().includes('not started')) {
      return 'Yet to bat';
    }
    const score = match.score?.find((s) => s?.inning?.toLowerCase().includes(teamName?.toLowerCase()));
    if (!score || score.r == null || score.w == null || score.o == null) {
      return 'Yet to bat';
    }
    const overs = match.matchType?.toLowerCase() === 'test' && Number.isInteger(score.o) ? `${score.o}.0` : score.o;
    return `${score.r}/${score.w} (${overs})`;
  };



  const teamInfo = match.teamInfo?.length >= 2 ? match.teamInfo : [
    { name: 'Team 1' },
    { name: 'Team 2' },
  ];

  return (
    <div className="min-h-screen container px-1.5 sm:px-6 lg:px-8 text-gray-200 bg-gray-900">
      <div className="flex flex-col sm:p-6">

        <div className="bg-gray-800 rounded-lg p-4 sm:p-6 space-y-6 sm:mt-25 mt-30">

          <div className="flex flex-col-reverse sm:flex-row sm:justify-between gap-4">
            <span className="text-sm sm:text-base font-bold">
              {match.name || 'Unknown Match'} ({match.matchType?.toUpperCase() || 'N/A'})
            </span>

            <div className="text-sm sm:text-sm font-bold flex items-center">
              <MapPinIcon className="h-10 w-10 sm:h-5 sm:w-5 mr-2 text-red-300" />
              {match.venue || 'Unknown Venue'}
              <RefreshButton />
            </div>
          </div>

          {/* Teams with Scores */}
          <div className="flex flex-col sm:flex-row justify-around items-center gap-4 sm:gap-6 mt-4 sm:mt-7">
            {[0, 1].map((i) => (
              <div key={i} className="flex flex-col items-center relative w-full sm:w-auto">
                {!match.status?.toLowerCase().includes('won') &&
                  !match.status?.toLowerCase().includes('not started') &&
                  battingTeamIndex === i && (
                    <GiCricketBat className="h-6 w-6 sm:h-8 sm:w-8 absolute -top-2 right-0 sm:right-2 text-green-500 bat-indicator" />
                  )}
                <span className="font-medium text-sm sm:text-base mb-3 sm:mb-5 flex items-center gap-2">
                  <img className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" src={teamInfo[i].img} alt={teamInfo[i].name} />
                  {teamInfo[i].name?.toUpperCase()}
                </span>
                <span
                  className={`text-2xl sm:text-4xl font-medium px-3 py-2 sm:px-4 sm:py-3 rounded-md border ${battingTeamIndex === i && !match.status?.toLowerCase().includes('not started')
                      ? 'bg-green-900 text-green-300 border-green-700'
                      : 'bg-black text-gray-300 border-gray-700'
                    }`}
                >
                  {getScoreDisplay(teamInfo[i].name)}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-base sm:text-lg font-semibold text-green-400">
              {match.status || 'Status Pending'}
            </h3>
          </div>
        </div>

        {/* Other Matches */}
        <div>
          <h1 className="text-lg font-bold ms-5 mt-5">Other Matches :</h1>
          <div className="grid grid-cols-12 border-x-2 border-gray-700 mt-2">
            <div className="col-span-12">
              {matches?.data?.length === 0 ? (
                <div className="flex justify-center items-center h-[500px]">
                  <div className="rounded-full h-20 w-20 bg-gray-700 animate-ping"></div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 justify-items-center">
                  {matches?.data.slice(0, 4).map((match) => (
                    <MatchCard key={match.id} match={match} />
                  ))}
                </div>
              )}
            </div>
          </div>

          <NavLink to="/">
            <div className="w-full flex justify-center">
              <button className="bg-gray-700 text-gray-200 text-sm font-semibold px-4 py-2 rounded-sm shadow-sm mt-4 hover:bg-gray-600">
                View More
              </button>
            </div>
          </NavLink>
        </div>
      </div>
    </div>

  );
}

export default MatchDetails;