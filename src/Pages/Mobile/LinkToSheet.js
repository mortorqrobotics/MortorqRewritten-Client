import React, { useEffect } from "react";
import BackButton from "Components/General/BackButton";

function LinkToSheet({ history }) {
  useEffect(() => {
    let askPrompt = async () => {
      let password = prompt("What is the password?");

      let response = await fetch(
        `${process.env.REACT_APP_SERVER_IP}/checkPassword?password=${password}`,
        {
          method: "POST",
        }
      );
      let data = await response.json();
      if (!data.correct) {
        alert(`Incorrect password`);
        return history.push("/");
      }

      let sheetResponse = await fetch(
        `${process.env.REACT_APP_SERVER_IP}/googleSheets`
      );
      let sheetData = await sheetResponse.json();
      window.location.replace(sheetData[0]);
    };

    askPrompt();
  });

  return (
    <div className="LinkToSheet">
      <BackButton />
      Loading...
    </div>
  );
}

export default LinkToSheet;
