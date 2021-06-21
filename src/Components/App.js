import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import Form from './Form';
import Analytics from './Analytics';
import getData from '../fetchRequests';

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    getData()
    .then(data => {
      setState(data);
    })
  }, [])

  const updateData = (form) => {
    filterImpressions
    // pass each filtered data set to each helper function until the 
    // resulting data can be set to state
  }

  const filterImpressions = (data) => {
    switch (data) {
      case 0:
        return state;
        break;
      case 1:
        const filtered = state.filter(ad => ad.impressions >= 700);
        return filtered;
        break;
      case 2:
        const filtered = state.filter(ad => ad.impressions < 700 && ad.impressions >= 400);
        return filtered;
        break;
      case 3:
        const filtered = state.filter(ad => ad.impressions < 400 && ad.impressions >= 100);
        return filtered;
        break;
      case 4:
        const filtered = state.filter(ad => ad.impressions < 100 && ad.impressions >= 0);
        return filtered;
        break:
    }

  }

  return (
    <>
      <header >
        <h1>Advertsing Analytics</h1>
        <p>{new Date().toLocaleString()}</p>
      </header>
      <Form filterData={filterData}/>
      <Analytics data={state}/>
    </>
  );
}

export default App;
