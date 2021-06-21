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
    filterImpressions(form);

    // pass each filtered data set to each helper function until the 
    // resulting data can be set to state
  }

  const filterImpressions = (form) => {
    switch (form.impressions) {
      case 0:
        filterClicks(state, form);
        break;
      case 1:
        const filtered = state.filter(ad => ad.impressions >= 700);
        filterClicks(filtered, form);
        break;
      case 2:
        const filtered = state.filter(ad => ad.impressions < 700 && ad.impressions >= 400);
        filterClicks(filtered, form);
        break;
      case 3:
        const filtered = state.filter(ad => ad.impressions < 400 && ad.impressions >= 100);
        filterClicks(filtered, form);
        break;
      case 4:
        const filtered = state.filter(ad => ad.impressions < 100 && ad.impressions >= 0);
        filterClicks(filtered, form);
        break;
    }
  }

  const something = () => {
    if (form.clicks.includes('-')) {
      const numbers = form.clicks.split('-');
      const filtered = data.filter(ad.clicks <= numbers[1] && ad.clicks >= numbers[0]);
    } else {
      const filtered = data.filter(ad => ad.clicks >= form.clicks)
    }
  }

  const filterClicks = (data, form) => {
    switch (form.clicks) {
      case 0:
        filterPlatform(data, form);
        break;
      case 1:
        const filtered = data.filter(ad => ad.clicks >= 100);
        filterPlatform(filtered, form);
      case 2:
        const filtered = state.filter(ad => ad.clicks < 100 && ad.clicks >= 75);
        filterPlatform(filtered, form);
        break;
      case 3:
        const filtered = state.filter(ad => ad.clicks < 75 && ad.clicks >= 25);
        filterPlatform(filtered, form);
        break;
      case 4:
        const filtered = state.filter(ad => ad.clicks < 25 && ad.clicks >= 0);
        filterPlatform(filtered, form);
        break;
    }
  }

  const filterPlatform = (data, form) => {
    switch (form.clicks) {
      case 0:
        filterProduct(data, form);
        break;
      case 1:
        const filtered = data.filter(ad => ad.clicks >= 100);
        filterProduct(filtered, form);
      case 2:
        const filtered = state.filter(ad => ad.clicks < 100 && ad.clicks >= 75);
        filterProduct(filtered, form);
        break;
      case 3:
        const filtered = state.filter(ad => ad.clicks < 75 && ad.clicks >= 25);
        filterProduct(filtered, form);
        break;
      case 4:
        const filtered = state.filter(ad => ad.clicks < 25 && ad.clicks >= 0);
        filterProduct(filtered, form);
        break;
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
