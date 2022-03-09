import React from 'react';
import Form from 'react-bootstrap/Form';
import './Numpad.css'

function Numpad({title, onInput, i }) {
  return (
      <div className="scoutNumpad">
           <Form.Group className="numpadGroup">
                <Form.Label>{title}</Form.Label>
                <Form.Control style={{"resize": "none"}} inputMode="numeric" as="textarea" rows={1} onInput={(e) => onInput(i, e.target.value)} />
            </Form.Group>
      </div>
  );
}

export default Numpad;