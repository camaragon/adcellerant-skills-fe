import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import Form from './Form';
import Analytics from './Analytics';
import getData from '../fetchRequests';

function App() {
  const [state, setState] = useState([]);
  const [filtered, setFiltered] = useState(false)

  useEffect(() => {
    getData()
    .then(data => {
      setState(data);
    })
  }, [])

  const updateData = (form) => {
    const result = filterImpressions(form);
    setState(result);
    setFiltered(true);
  }

  const filterImpressions = (form) => {
    if (form.impressions === '') {
      return filterClicks(state, form);
    } else if (form.impressions.includes('-')) {
      const range = form.impressions.split('-');
      const filtered = state.filter(ad => ad.impressions <= range[1] && ad.impressions >= range[0]);
      return filterClicks(filtered, form);
    } else {
      const filtered = state.filter(ad => ad.impressions >= form.impressions)
      return filterClicks(filtered, form);
    }
  }

  const filterClicks = (data, form) => {
    if (form.clicks === '') {
      return filterPlatform(data, form);
    } else if (form.clicks.includes('-')) {
      const range = form.clicks.split('-');
      const filtered = data.filter(ad => ad.clicks <= range[1] && ad.clicks >= range[0]);
      return filterPlatform(filtered, form);
    } else {
      const filtered = data.filter(ad => ad.clicks >= form.clicks)
      return filterPlatform(filtered, form);
    }
  }

  const filterPlatform = (data, form) => {
    if (form.platform === '') {
      return filterProduct(data, form);
    } else {
      const filtered = data.filter(ad => ad.platform === form.platform);
      return filterProduct(filtered, form);
    }
  }

  const filterProduct = (data, form) => {
    if (form.product === '') {
      return filterDateRange(data, form);
    } else {
      const filtered = data.filter(ad => ad.product === form.product);
      return filterDateRange(filtered, form);
    }
  }

  const filterDateRange = (data, form) => {
    if (form.start === '') {
      return data;
    } else if (form.end === '') {
      const filtered = data.filter(ad => ad.date === form.start);
      return filtered;
    } else {
      const start = Date.parse(form.start);
      const end = Date.parse(form.end);
      const filtered = data.filter(ad => {
        let date = Date.parse(ad.date);
        return (date >= start && date <= end)
      })
      return filtered;
    }
  }

  const resetFilter = (event) => {
    event.preventDefault();
    getData()
    .then(data => {
      setState(data);
    })
    setFiltered(false);
  }

  return (
    <>
      <header >
        <h1>Advertsing Analytics</h1>
        <p>{new Date().toLocaleString()}</p>
      </header>
      {!filtered ? <Form updateData={updateData} /> : 
      <div className='postFilter'>
        <h3>{state.length} Results</h3>
        <button className='filterReset' onClick={resetFilter}>Reset Filter</button>
      </div>}
      <Analytics data={state}/>
    </>
  );
}

export default App;
