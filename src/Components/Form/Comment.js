import React from 'react';
import Form from 'react-bootstrap/Form';
import './Comment.css'

function Comment({title, onInput, survey=false}) {
    return (
        <div className="comment">
            <Form.Group className="commentGroup">
                <Form.Label suppressContentEditableWarning={true} contentEditable={`${survey}`} onBlur={onInput}>{title}</Form.Label>
                <Form.Control style={{"resize": "none"}} as="textarea" rows={3} />
            </Form.Group>
        </div>
    );
}

export default Comment;