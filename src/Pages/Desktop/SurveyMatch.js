import React, {useState} from 'react';
import BackButton from 'Components/General/BackButton';
import SmallButton from 'Components/General/SmallButton';
import SurveyPreview from 'Components/SurveyPreview'
import { useHistory } from 'react-router-dom';
import './SurveyMatch.css';

let style = {
    'fontSize': '100%',
    'width': '15vmin',
    'height': '50px'
}

function SurveyMatch() {
    let history = useHistory();
    let [template, setTemplate] = useState([])
    let defaultScheme = {"title": "", "type": "", "value": ""}

    let addSlider = () => {
        let sliderScheme = defaultScheme;
        sliderScheme.type = "slider"
        sliderScheme.title = "Slider Question"
        sliderScheme.value = "0"
        setTemplate([...template, sliderScheme])
    }

    let addYesNo = () => {
        let yesNoScheme = defaultScheme;
        yesNoScheme.type = "yesno"
        yesNoScheme.title = "Yes/No Question"
        setTemplate([...template, yesNoScheme])
    }

    let addTimer = () => {
        let timerScheme = defaultScheme;
        timerScheme.type = "timer"
        timerScheme.title = "Timer"
        setTemplate([...template, timerScheme])
    }

    let addDropdown = () => {
        let dropdownScheme = defaultScheme;
        dropdownScheme.type = "dropdown"
        dropdownScheme.title = "Dropdown Question"
        dropdownScheme.value = "Option"
        dropdownScheme.options = ['Option']
        setTemplate([...template, dropdownScheme])
    }

    let addComment = () => {
        let commentScheme = defaultScheme;
        commentScheme.type = "comment"
        commentScheme.title = "Comment Question"
        setTemplate([...template, commentScheme])
    }

    let addSection = () => {
        let sectionScheme = defaultScheme;
        sectionScheme.type = "section"
        sectionScheme.title = "Section Header"
        setTemplate([...template, sectionScheme])
    }

    let viewTemplate = async () => {
        await fetch(`${process.env.REACT_APP_SERVER_IP}/setTemplate`, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({password: "test", template: template})
        })
        history.push('/')
    }

    return (
        <div className="surveyMatch">
            <BackButton />
            <h1 id="surveyHeader">Match Scout:</h1>
            <div className="surveyOptions">
                <SmallButton buttonStyle={style} onClick={addSlider}>Slider</SmallButton>
                <SmallButton buttonStyle={style} onClick={addYesNo}>Yes/No</SmallButton>
                <SmallButton buttonStyle={style} onClick={addTimer}>Timer</SmallButton>
                <SmallButton buttonStyle={style} onClick={addDropdown}>Dropdown</SmallButton>
                <SmallButton buttonStyle={style} onClick={addComment}>Comment</SmallButton>
                <SmallButton buttonStyle={style} onClick={addSection}>Section</SmallButton>
                <SmallButton buttonStyle={style} onClick={viewTemplate}>View Template</SmallButton>
            </div>
            <SurveyPreview template={template} setTemplate={setTemplate}/>
        </div>
    );
}

export default SurveyMatch;