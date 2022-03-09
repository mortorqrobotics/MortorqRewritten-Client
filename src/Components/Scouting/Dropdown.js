import React from 'react';
import './Dropdown.css'

function Dropdown({ options, title, onInput, i }) {
  return (
      <div className="scoutDropdown">
          <p>{title}</p>
          <select className="custom-select" size={options.length} onChange={(e) => onInput(i, e.target.value)}>
           {options.map(option => {
             return <option key={option}>{option}</option>
           })}
          </select> 
      </div>
  );
}

export default Dropdown;