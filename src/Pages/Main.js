import React from "react";
import BigButton from "Components/General/BigButton";
import "./Main.css";

function Main() {
  let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    return (
      <div className="mainScreen">
        <h1 className="title">MorScout</h1>
        <BigButton className="mainButtons" to="/matchorpit">
          Scout
        </BigButton>
        <br />
        <BigButton className="mainButtons" to="/linkToSheet">
          View Data
        </BigButton>
        <br />
      </div>
    );
  } else {
    return (
      <div className="mainScreen">
        <h1 className="title">MorScout</h1>
        <BigButton className="mainButtons" to="/admin">
          Admin
        </BigButton>
      </div>
    );
  }
}

export default Main;
