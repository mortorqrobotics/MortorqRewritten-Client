import React from "react";
import Form from "react-bootstrap/Form";
import "./FileUpload.css";

function FileUpload({ title }, ref) {
  return (
    <div className="scoutFileUpload">
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>{title}</Form.Label>
        <Form.Control type="file" ref={ref} />
      </Form.Group>
    </div>
  );
}

export default React.forwardRef(FileUpload);
