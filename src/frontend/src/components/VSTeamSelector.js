import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './VSTeamSelector.scss'

export const VSTeamSelector = ({teamName}) => {

    const [teams, setTeam] = useState([]);

    useEffect(
        () => {
            const fetchAllTeams = async () => {
                const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team`);
                const data = await response.json();
                setTeam(data);
            };
            fetchAllTeams();
        },
        []
    );

    return (
        <ol className="VSTeamSelector">
            {teams.map(team => 
                (teamName != team.teamName && <li key={team.id}>
                    <Link to={`/matches/${teamName}/${team.teamName}`}>{team.teamName}</Link>
                </li>))}
        </ol>
    )
}

