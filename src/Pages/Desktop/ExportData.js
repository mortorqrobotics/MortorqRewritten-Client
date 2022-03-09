import BackButton from "Components/General/BackButton";
import React, { useEffect, useState } from "react";
import "./ExportData.css";

function ExportData() {
  let [googleSheets, setGoogleSheets] = useState([]);

  useEffect(() => {
    let getSheets = async () => {
      let response = await fetch(
        `${process.env.REACT_APP_SERVER_IP}/googleSheets`
      );
      let data = await response.json();
      setGoogleSheets(data);
    };

    getSheets();
  }, []);

  return (
    <div className="ExportData">
      <BackButton />
      <div className="dataSheets">
        {googleSheets.map((sheet, i) => (
          <GoogleSheet key={i}>{sheet}</GoogleSheet>
        ))}
      </div>
    </div>
  );
}

function GoogleSheet({ children }) {
  return (
    <a className="googleSheet" href={children}>
      {children}
    </a>
  );
}

export default ExportData;
