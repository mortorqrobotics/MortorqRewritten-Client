import React, { useState } from 'react';
import BackButton from 'Components/General/BackButton';
import FormControl from 'react-bootstrap/FormControl'
import './Login.css';

function Login(props) {
    const [userName, setUsername] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const query = new URLSearchParams(props.location.search.slice(1));
        let path = query.get('match') === "true" ? "match" : "pit";

        props.history.push({pathname: `/${path}`, data: [...props.location.data, userName]})
    }

    const handleChange = (event) => {
        setUsername(event.target.value);
    }

    return (
        <div className="loginScreen">
            <BackButton />
            <h1 className="title">Login</h1>
            <form onSubmit={handleSubmit}>
                <FormControl onChange={handleChange} placeholder="Your Name"/>
            </form>
        </div>
    );
}

export default Login;