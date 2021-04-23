import { useState, useEffect } from 'react';
import { getStandings } from './api'
import StandingSection from "./standings/StandingSection";
import "antd/dist/antd.css";

const App = () => {

  return <main style={{padding: '50px'}}>
          <StandingSection />
        </main>;
}

export default App;
