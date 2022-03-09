import React from 'react';
import Slider from 'Components/Form/Slider';
import YesNo from 'Components/Form/YesNo';
import Timer from 'Components/Form/Timer'
import Comment from 'Components/Form/Comment'
import Dropdown from 'Components/Form/Dropdown'
import './SurveyPreview.css';

function SurveyPreview({template, setTemplate}) {

    let handleChange = (e, i, param="title") => {
        let value = e.target.textContent;
        let newTemplate = JSON.parse(JSON.stringify(template)); // bruh
        newTemplate[i][param] = value;
        
        setTemplate(newTemplate)
    }

    let newOption = (i) => {
        let newTemplate = JSON.parse(JSON.stringify(template))
        newTemplate[i]['options'].push(newTemplate[i].value)
        
        setTemplate(newTemplate)
    }

    let deleteOption = (i, j) => {
        let newTemplate = JSON.parse(JSON.stringify(template))
        newTemplate[i]['options'].splice(j, 1)

        setTemplate(newTemplate)
    }

    let updateOption = (e, i, j) => {
        let value = e.target.textContent;
        console.log(value)
        let newTemplate = JSON.parse(JSON.stringify(template))
        newTemplate[i]['options'][j] = value;

        setTemplate(newTemplate)
    }

    return (
        <div className="surveyPreview">
            {template.map((question, i) => {
                switch(question.type) {
                    case "section":
                        return <h1 key={i} contentEditable="true" suppressContentEditableWarning={true} onBlur={(e) => handleChange(e, i)}>{question.title}</h1>
                    case "slider":
                        return <Slider survey={true} key={i} title={question.title} value={question.value} onInput={(e, param) => handleChange(e, i, param)}></Slider>
                    case "yesno":
                        return <YesNo survey={true} key={i} title={question.title} onInput={(e) => handleChange(e, i)}></YesNo>
                    case "timer":
                        return <Timer survey={true} key={i} title={question.title} disabled={true} onInput={(e) => handleChange(e, i)}></Timer>
                    case "comment":
                        return <Comment survey={true} key={i} title={question.title} onInput={(e) => handleChange(e, i)}></Comment>
                    case "dropdown":
                        return (
                            <Dropdown 
                                key={i}
                                title={question.title}
                                options={question.options}
                                onInput={(e) => handleChange(e, i)}
                                newOption={() => newOption(i)} 
                                deleteOption={(j) => deleteOption(i, j)}
                                updateOption={(e, j) => updateOption(e, i, j)}
                                survey={true}
                            ></Dropdown>
                        )
                    default:
                        return null;
                }
            })}
        </div>
    );
}

export default SurveyPreview;