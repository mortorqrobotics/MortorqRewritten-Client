import React, {useState, useEffect} from 'react';
import Match from 'Components/Match';
import BackButton from 'Components/General/BackButton';
import './Matches.css'

function Matches() {
  const [matches, setMatches] = useState([])

  const getMatches = async () => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_IP}/getMatches`)
    let data = await response.json();

    setMatches(data);
    return;
  }

  useEffect(() => {
    getMatches();
  }, [])

  return (
    <div className="matches">
        <BackButton />
        <h1 className="title">Matches</h1>
        {matches.map((match, i) => {
          return <Match matchNumber={i + 1} teams={match} key={i + 1}/>
        })}
    </div>
  );
}

export default Matches;