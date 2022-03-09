import { useState, useEffect } from "react";

function useTeams() {
    const [teams, setTeams] = useState([])

    const getMatches = async () => {
      const response = await fetch(`${process.env.REACT_APP_SERVER_IP}/teams`)
      let data = await response.json();
  
      setTeams(data);
      return;
    }
  
    useEffect(() => {
      getMatches();
    }, [])

    return teams;
}

export default useTeams;