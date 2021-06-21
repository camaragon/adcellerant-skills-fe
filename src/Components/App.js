import React, { useState } from 'react';
import '../styles/App.css';
import Form from './Form';

function App() {
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
