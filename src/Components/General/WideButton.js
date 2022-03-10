import React from 'react';
import Button from 'react-bootstrap/Button';

let style = {
    'fontSize': '1.5em',
    'width': '65vmin',
    'height': '50px'
}

function WideButton({children, className="", onClick, variant="success", disabled=false}) {
  return (
    <Button className={className} style={style} variant={variant} onClick={onClick} disabled={disabled}>{children}</Button>
  );
}

export default WideButton;