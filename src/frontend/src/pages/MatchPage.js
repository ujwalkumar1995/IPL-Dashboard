import { React, useEffect, useState } from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { useParams } from 'react-router-dom'
import './MatchPage.scss'
import { YearSelector } from '../components/YearSelector';
import { VSTeamSelector } from '../components/VSTeamSelector';
import { HomeIcon } from '../components/HomeIcon';

export const MatchPage = () => {

  const [matches, setMatches] = useState([]);
  const { teamName, year } = useParams();
  useEffect(
    () => {
      const fetchMatches = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/matches?year=${year}`);
        const data = await response.json();
        setMatches(data);
      };
      fetchMatches();
    },
    [teamName, year]
  );
  if (matches == null || matches.length == 0)
    return <div>
      <HomeIcon />
      <div className="MatchPage">
        <div className="year-selector">
          <h3>Select Year</h3>
          <YearSelector teamName={teamName} />
          <h3>Select Oppenent</h3>
          <VSTeamSelector teamName={teamName} />
        </div>

        <div>
          <h1 className="no-matches-found">No Matches Found</h1>
        </div>
      </div>
    </div>
  else {
    return (
      <div>
        <HomeIcon />
        <div className="MatchPage">
          <div className="year-selector">
            <h3>Select Year</h3>
            <YearSelector teamName={teamName} />
            <h3>Select Oppenent</h3>
            <VSTeamSelector teamName={teamName} />
          </div>

          <div>
            <h1 className="page-heading">{teamName} matches in {year}</h1>
            {
              matches.map(match => <MatchDetailCard key={match.id} teamName={teamName} match={match} />)
            }
          </div>
        </div>
      </div>
    );
  }
}

