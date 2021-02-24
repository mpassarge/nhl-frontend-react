import React, { useState, useEffect } from 'react';
import { getStandings } from './api'
import StandingSection from "./standings/StandingSection";

const App = () => {

  let [standings, setStandings] = useState([]);

  useEffect(() => {
    getStandings()
      .then(d => {
        setStandings(d.data);
      }).catch(e => {
        console.error(e);
      });
  }, []);

  return <main style={{padding: '50px'}}>
    <StandingSection standingsData={standings} />
  </main>;
}

export default App;