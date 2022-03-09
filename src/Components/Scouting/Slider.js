import React from 'react';
import UpAndDown from 'Assets/UpAndDown.png'
import './Slider.css'

function Slider({title, value, onInput, survey=false, i}) {
  let upOrDownClick = (e) => {
    let imagePos = e.target.getBoundingClientRect()
    let x = e.clientX - imagePos.left;
    let up = x > imagePos.width / 2;

    if(parseInt(value) === 0 && !up) return
    up ? onInput(i, `${parseInt(value) + 1}`) : onInput(i, `${parseInt(value) - 1}`)
  }

  return (
      <div className="scoutSlide">
          <img alt="" src={UpAndDown} onClick={upOrDownClick}></img>
          <p className="slider-title">{title}</p>
          <p className="slider-val">{value}</p>
      </div>
  );
}

export default Slider;