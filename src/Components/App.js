import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import Form from './Form';
import Analytics from './Analytics';
import getData from '../fetchRequests';
import filterData from '../calculations';

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
    const result = filterData(state, form);
    setState(result);
    setFiltered(true);
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
