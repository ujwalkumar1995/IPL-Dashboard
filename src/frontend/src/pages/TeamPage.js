import { React, useEffect, useState } from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import {useParams, Link} from 'react-router-dom'
import './TeamPage.scss'
import { WinLossChart } from '../components/WinLossChart';
import { PieChart } from 'react-minimal-pie-chart';

export const TeamPage = () => {
  const [team,setTeam] = useState({matches:[]});
  const {teamName} = useParams();
  useEffect(
    () => {
          const fetchTeam = async () => {
          const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}`);
          const data = await response.json();
          setTeam(data);
      };
      fetchTeam();
    },
    [teamName]
  );

  if(!team || !team.teamName){
    return <h1>Team not found</h1>
  }
  return (
    <div className="TeamPage">
        <div className="team-name-section">
          <h1 className="team-name">{team.teamName}</h1>
        </div>
        <div>
            <WinLossChart totalMatches={team.totalMatches} totalWins={team.totalWins} />
        </div>
        <div className="match-detail-section">
          <h3>Latest Matches</h3>
          <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
        </div>
        {team.matches.slice(1).map(match => <MatchSmallCard key={match.id} teamName={team.teamName} match = {match} />)}
        <div className="more-link">
        <Link to ={`/teams/${teamName}/matches/${team.matches[0].date.split("-")[0]}`}>More ></Link>
          
        </div>
    </div>
  );
}

