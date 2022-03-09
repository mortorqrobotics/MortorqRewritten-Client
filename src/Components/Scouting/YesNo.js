import React from 'react';
import Yes from 'Assets/Yes.png'
import No from 'Assets/No.png'
import './YesNo.css'

function YesNo({title, i, isYes, onInput}) {    
    let handleClick = () => {
        onInput(i, !isYes);
    }

    return (
      <div className="yesNo">
          <img alt="" src={isYes ? Yes : No} onClick={handleClick}/>
          <p>{title}</p>
      </div>
    );
}

export default YesNo;