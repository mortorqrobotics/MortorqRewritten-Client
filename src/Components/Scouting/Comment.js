// @ts-nocheck
import React from 'react';
import Form from 'react-bootstrap/Form';
import './Comment.css'

let defaultStyle = {"resize": "none"}

function Comment({title, i, onInput, rows=3}) {
    return (
        <div className="comment">
            <Form.Group className="commentGroup">
                <Form.Label>{title}</Form.Label>
                <Form.Control style={defaultStyle} as="textarea" rows={rows} onInput={(e) => onInput(i, e.target.value)} />
            </Form.Group>
        </div>
    );
}   

export default Comment;