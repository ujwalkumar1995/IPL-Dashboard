import { React, useEffect, useState } from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import {useParams} from 'react-router-dom'
import './VSMatchPage.scss'
import { VSTeamSelector } from '../components/VSTeamSelector';
import { YearSelector } from '../components/YearSelector';
import { HomeIcon } from '../components/HomeIcon';

export const VSMatchPage = () => {
  
  const [matches,setMatches] = useState([]);
  const {team1,team2} = useParams();
  useEffect(
    () => {
          const fetchMatches = async () => {
          const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/matches/${team1}/${team2}`);
          const data = await response.json();
          setMatches(data);
      };
      fetchMatches();
    },
    [team1,team2]
  );
  if(matches == null || matches.length == 0)
  return(
    <div>
      <HomeIcon/>
    <div className="VSMatchPage">
        <div className="team-selector">
          <h3>Select Year</h3>
          <YearSelector  teamName={team1}/>  
          <h3>Select Oppenent</h3>
          <VSTeamSelector teamName={team1}/>
        </div>
        
        <div>
        <h1 className = "no-matches-found">No Matches Found</h1>
        </div>
    </div>
    </div>  
  )
  else
  return (
    <div>
      <HomeIcon/>
    <div className="MatchPage">
        <div className="team-selector">
          <h3>Select Year</h3>
          <YearSelector  teamName={team1}/>  
          <h3>Select Oppenent</h3>
          <VSTeamSelector teamName={team1}/>
        </div>
        
        <div>
        <h1 className = "page-heading">{team1} vs {team2}</h1>
          {
            matches.map(match => <MatchDetailCard key={match.id} teamName={team1} match={match} />)
          }
        </div>
    </div>
    </div>
  );
  
}

