import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

let style = {
    'fontSize': '1.5em',
    'width': '65vmin',
    'height': '100px'
}

function BigButton({to=' ', children, className}) {
  return (
    <Link to={to}>
            <Button className={className} style={style} variant="warning">{children}</Button>
    </Link>
  );
}

export default BigButton;