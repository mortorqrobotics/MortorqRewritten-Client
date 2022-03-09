import BackButton from 'Components/General/BackButton';
import Dropdown from 'Components/Scouting/Dropdown';
import Numpad from 'Components/Scouting/Numpad';
import Comment from 'Components/Scouting/Comment';
import useTemplate from 'Hooks/useTemplate';
import React from 'react';
import './PitScout.css';
import WideButton from 'Components/General/WideButton';

function PitScout(props) {
  let [template, setTemplate] = useTemplate("pitTemplate")

  let submitForm = async () => {
    await fetch(`${process.env.REACT_APP_SERVER_IP}/pit/submitForm`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({"user": props.location.data[1], "team": props.location.data[0], "response": template})
    })
    props.history.push('/')
  }

  return (
    <div className="PitScout">
        <BackButton />
        <h1>Pit Scout</h1>
        {template.map((question, i) => {
            switch(question.type) {
                case "dropdown":
                    return <Dropdown title={question.title} options={question.options} key={i} i={i} onInput={setTemplate} />
                case "numpad":
                    return <Numpad key={i} title={question.title} i={i} onInput={setTemplate} />
                case "shortcomment":
                    return <Comment key={i} onInput={setTemplate} i={i} rows={1} title={question.title} />
                case "comment":
                    return <Comment key={i} onInput={setTemplate} i={i} rows={3} title={question.title} />
                case "yesno":
                    return <Dropdown title={question.title} i={i} options={["Yes", "No"]} key={i} onInput={setTemplate} />
                default:
                    return null;
            }
        })}

        <WideButton className="subButton" onClick={submitForm}>Submit!</WideButton>
    </div>
  );
}

export default PitScout;