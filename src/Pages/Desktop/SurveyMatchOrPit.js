import React from 'react';
import BigButton from 'Components/General/BigButton'
import BackButton from 'Components/General/BackButton'
import './SurveyMatchOrPit.css';

function SurveyMatchOrPit() {
  return (
    <div className="surveyMatchOrPit">
        <BackButton />
        <BigButton className="mopButton" to="/surveyMatch">Match Scout</BigButton><br />
        <BigButton className="mopButton" to="/surveyPit">Pit Scout</BigButton>
    </div>
  );
}

export default SurveyMatchOrPit;