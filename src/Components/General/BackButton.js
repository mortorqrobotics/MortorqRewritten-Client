// @ts-nocheck
import React from 'react';
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom";

function BackButton() {
    let history = useHistory();
    let style = {
        'position': 'absolute',
        'fontSize': '70%',
        'color': 'black',
        'left': '5px',
        "top": '5px',
        'height': '30px',
        'width': '40px'
    }

    return (
        <Button style={style} variant="success" onClick={() => history.goBack()}>←</Button>
    );
}

export default BackButton;