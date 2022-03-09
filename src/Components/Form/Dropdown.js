import React from 'react';
import './Dropdown.css'
import SmallButton from 'Components/General/SmallButton';

function Dropdown({title, onInput, options, newOption, deleteOption, updateOption, survey=false}) {
    return (
        <div className="dropdown">
            <div className="dropHeader">
                <p suppressContentEditableWarning={true} contentEditable={`${survey}`} onBlur={onInput}>{title}</p>
            </div>
            <div className="dropContent">
                {
                    options.map((option, i) => {
                        return <Option 
                            key={`option${i}`} 
                            text={option} 
                            updateOption={(e) => updateOption(e, i)} 
                            deleteOption={() => deleteOption(i)}
                            survey={survey}
                        ></Option>
                    })
                }
                <SmallButton onClick={newOption} className="addOption">Add Option</SmallButton>
            </div>
        </div>
    );
}

function Option({text, updateOption, deleteOption, survey}) {
    return (
        <div className="dropOption">
            <p 
                suppressContentEditableWarning={true} 
                // @ts-ignore
                contentEditable={`${survey}`} 
                onBlur={updateOption}
            >{text}</p>
            <h1 onClick={deleteOption}>X</h1>
        </div>
    )
}

export default Dropdown;