import React from 'react';
import BackButton from 'Components/General/BackButton';
import BigButton from 'Components/General/BigButton';
import './MatchOrPit.css';

function MatchOrPit() {
  return (
    <div className="matchOrPit">
      <BackButton />
      <BigButton className="mopButton" to="/matches">Match Scout</BigButton><br />
      <BigButton className="mopButton" to="/teams">Pit Scout</BigButton>
    </div>
  );
}

export default MatchOrPit;