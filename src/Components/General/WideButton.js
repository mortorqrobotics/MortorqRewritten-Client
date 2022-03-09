import React from 'react';
import Button from 'react-bootstrap/Button';

let style = {
    'fontSize': '1.5em',
    'width': '65vmin',
    'height': '50px'
}

function WideButton({children, className="", onClick, variant="success"}) {
  return (
    <Button className={className} style={style} variant={variant} onClick={onClick}>{children}</Button>
  );
}

export default WideButton;