import React, {useState} from 'react';
import BackButton from 'Components/General/BackButton';
import FormControl from 'react-bootstrap/FormControl'
import './Admin.css'

function Admin(props) {
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        let response = await fetch(`${process.env.REACT_APP_SERVER_IP}/checkPassword?password=${password}`, {
            method: 'POST'
        })
        let data = await response.json();
        
        if(data.correct) {
            props.history.push({pathname: '/surveypick'})
        } else {
            alert('Incorrect Password')
        }
    }

    const handleChange = (event) => {
        setPassword(event.target.value);
    }

    return (
        <div className="adminScreen">
            <BackButton />
            <form onSubmit={handleSubmit}>
                    <FormControl type="password" onChange={handleChange} placeholder="Admin password"/>
            </form>
        </div>
    );
}

export default Admin;