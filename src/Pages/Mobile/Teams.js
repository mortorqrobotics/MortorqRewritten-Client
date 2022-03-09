import React from 'react';
import BackButton from 'Components/General/BackButton';
import './Teams.css'
import useTeams from 'Hooks/useTeams';
import WideButton from 'Components/General/WideButton';

function Teams({ history }) {
  let teams = useTeams()

  return (
    <div className="teamList">
        <BackButton />
        <h1 className="title">Teams</h1>
        {teams.map((team, i) => {
          return <WideButton key={i} variant='warning' onClick={() => history.push({pathname: `/login`, search: "?match=false", data: [team]})}>{team}</WideButton>
        })}
    </div>
  );
}

export default Teams;