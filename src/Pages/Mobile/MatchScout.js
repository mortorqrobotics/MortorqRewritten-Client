import React from 'react';
import Slider from 'Components/Scouting/Slider';
import Timer from 'Components/Scouting/Timer';
import YesNo from 'Components/Scouting/YesNo';
import Comment from 'Components/Scouting/Comment'
import WideButton from 'Components/General/WideButton'
import useTemplate from 'Hooks/useTemplate';
import './MatchScout.css';
import BackButton from 'Components/General/BackButton';

function MatchScout(props) {
    let [template, updateTemplate] = useTemplate("template")

    let submitForm = async () => {
        await fetch(`${process.env.REACT_APP_SERVER_IP}/match/submitForm`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({"user": props.location.data[2], "team": props.location.data[0], "match": props.location.data[1], "response": template.filter(item => item.type !== "section")})
        })
        props.history.push('/')
    }

    return (
        <div className="MatchScout">
            <BackButton />
            {template.map((question, i) => {
                switch(question.type) {
                    case "section":
                        return <h1 key={i} style={{marginTop: "15px"}}>{question.title}</h1>
                    case "slider":
                        return <Slider key={i} i={i} title={question.title} value={question.value} onInput={updateTemplate}></Slider>
                    case "yesno":
                        return <YesNo key={i} i={i} title={question.title} isYes={question.value} onInput={updateTemplate}></YesNo>
                    case "comment":
                        return <Comment key={i} i={i} title={question.title} onInput={updateTemplate}></Comment>
                    case "timer":
                        return <Timer key={i} i={i} title={question.title} onInput={updateTemplate}></Timer>
                    default:
                        return null;
                }
            })}
            <WideButton className="subButton" onClick={submitForm}>Submit!</WideButton>
        </div>
    )
}

export default MatchScout;