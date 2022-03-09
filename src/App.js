import React from "react";
import Main from "Pages/Main";
import MatchOrPit from "Pages/Mobile/MatchOrPit";
import Matches from "Pages/Mobile/Matches";
import Login from "Pages/Mobile/Login";
import Admin from "Pages/Desktop/Admin";
import SurveyMatchOrPit from "Pages/Desktop/SurveyMatchOrPit";
import SurveyMatch from "Pages/Desktop/SurveyMatch.js";
import MatchScout from "Pages/Mobile/MatchScout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Teams from "Pages/Mobile/Teams";
import PitScout from "Pages/Mobile/PitScout";
import ExportData from "Pages/Desktop/ExportData";
import LinkToSheet from "Pages/Mobile/LinkToSheet";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/matchorpit" component={MatchOrPit} />
        <Route path="/matches" component={Matches} />
        <Route path="/login" component={Login} />
        <Route exact path="/match" component={MatchScout} />
        <Route exact path="/pit" component={PitScout} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/surveypick" component={SurveyMatchOrPit} />
        <Route exact path="/surveymatch" component={SurveyMatch} />
        <Route exact path="/teams" component={Teams} />
        <Route exact path="/exportData" component={ExportData} />
        <Route exact path="/linkToSheet" component={LinkToSheet} />
      </Switch>
    </Router>
  );
}

export default App;
