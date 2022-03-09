import React, {useState} from 'react';
import Yes from 'Assets/Yes.png'
import No from 'Assets/No.png'
import './YesNo.css'

function YesNo({title, onInput, survey=false}) {
    let [img, setImg] = useState(No);
    
    let handleClick = () => {
        if(img === No) return setImg(Yes)
        setImg(No) 
    }

    return (
      <div className="yesNo">
          <img alt="" src={img} onClick={handleClick}/>
          <p suppressContentEditableWarning={true} contentEditable={`${survey}`} onBlur={onInput}>{title}</p>
      </div>
  );
}

export default YesNo;