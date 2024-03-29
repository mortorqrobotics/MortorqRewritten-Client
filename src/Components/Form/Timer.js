import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import './Timer.css'

function Timer({title, onInput, disabled=false, survey=false}) {
    let [time, setTime] = useState(0)
    let [stopped, setStopped] = useState(true)

    let toggleTimer = () => {
        if(stopped) return setStopped(false)
        setStopped(true);
    }

    useEffect(() => {
        if(stopped || disabled) return;
        setTimeout(() => setTime(time + 1), 1000)
    }, [time, stopped, disabled])
    
    return (
      <div className="timer">
          <Button onClick={toggleTimer} variant="warning"></Button>
          <p className="timerTitle" suppressContentEditableWarning={survey} contentEditable={`${survey}`} onClick={toggleTimer} onBlur={onInput}>{title}</p>
          <p className="timerSeconds">{(time === 1) ? `${time} second` : `${time} seconds`}</p>
      </div>
  );
}

export default Timer;