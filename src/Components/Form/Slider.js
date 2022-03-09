import React from 'react';
import UpAndDown from 'Assets/UpAndDown.png'
import './Slider.css'

function Slider({title, value, onInput, survey=false}) {
  return (
      <div className="slider">
          <img alt="" src={UpAndDown}></img>
          <p className="slider-title" suppressContentEditableWarning={true} contentEditable={`${survey}`} onBlur={(e) => onInput(e, "title")}>{title}</p>
          <p className="slider-val" suppressContentEditableWarning={true} contentEditable={`${survey}`} onBlur={(e) => onInput(e, "default")}>{value}</p>
      </div>
  );
}

export default Slider;