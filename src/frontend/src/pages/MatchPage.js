import { React, useEffect, useState } from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import {useParams} from 'react-router-dom'

export const MatchPage = () => {
  
  const [matches,setMatches] = useState([]);
  const {teamName,year} = useParams();
  useEffect(
    () => {
          const fetchMatches = async () => {
          const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
          const data = await response.json();
          setMatches(data);
          console.log(data);
      };
      fetchMatches();
    },
    []
  );

  return (
    <div className="MatchPage">
        <h1>MatchPage</h1>
        {
          matches.map(match => <MatchDetailCard teamName={teamName} match={match} />)
        }
    </div>
  );
}
