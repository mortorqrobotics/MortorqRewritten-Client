import React from 'react';
import Button from 'react-bootstrap/Button';

let style = {
    'fontSize': '1.5em',
    'width': '15vmin',
    'height': '50px'
}

function SmallButton({children, className="", onClick, buttonStyle=style}) {
  return (
      <Button className={className} style={buttonStyle} onClick={onClick} variant="warning" >{children}</Button>
  );
}

export default SmallButton;