// @ts-nocheck
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Match.css'

function Match(props) {
    let [team1, team2, team3, team4, team5, team6] = props.teams;

    return (
        <div className="match">
            <p>Match {props.matchNumber}</p>
            <table>
                <tbody>
                    <tr>
                        <td><Link to={{pathname: `/login`, search: "?match=true", data: [team1, props.matchNumber]}}><Button variant="info">{team1}</Button></Link></td>
                        <td><Link to={{pathname: `/login`, search: "?match=true", data: [team2, props.matchNumber]}}><Button variant="info">{team2}</Button></Link></td>
                        <td><Link to={{pathname: `/login`, search: "?match=true", data: [team3, props.matchNumber]}}><Button variant="info">{team3}</Button></Link></td>
                    </tr>
                    <tr>
                        <td><Link to={{pathname: `/login`, search: "?match=true", data: [team4, props.matchNumber]}}><Button variant="danger">{team4}</Button></Link></td>
                        <td><Link to={{pathname: `/login`, search: "?match=true", data: [team5, props.matchNumber]}}><Button variant="danger">{team5}</Button></Link></td>
                        <td><Link to={{pathname: `/login`, search: "?match=true", data: [team6, props.matchNumber]}}><Button variant="danger">{team6}</Button></Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Match;