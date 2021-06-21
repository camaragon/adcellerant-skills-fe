import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import Form from './Form';
import getData from '../fetchRequests';

function App() {

  useEffect(() => {
    getData()
    .then(data => console.log((data)))
  }, [])
  
  return (
    <>
      <header >
        <h1>Advertsing Analytics</h1>
        <p>{new Date().toLocaleString()}</p>
      </header>
      <Form/>
    </>
  );
}

export default App;
