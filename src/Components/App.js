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

  const filterData = () => {

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
