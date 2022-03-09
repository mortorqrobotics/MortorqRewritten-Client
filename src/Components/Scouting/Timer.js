import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import './Timer.css'

function Timer({title, onInput, i}) {
    let [time, setTime] = useState(0)
    let [stopped, setStopped] = useState(true)

    let toggleTimer = () => {
        if(stopped) return setStopped(false)
        setStopped(true);
        onInput(i, time);
    }

    useEffect(() => {
        if(stopped) return;
        setTimeout(() => setTime(time + 1), 1000)
    }, [time, stopped])
    
    return (
      <div className="timer">
          <Button onClick={toggleTimer} variant="warning">{title}</Button>
          <p className="timerSeconds">{(time === 1) ? `${time} second` : `${time} seconds`}</p>
      </div>
  );
}

export default Timer;