import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import Form from './Form';
import Analytics from './Analytics';
import getData from '../fetchRequests';
import filterData from '../calculations';
import { Route, Link } from 'react-router-dom';

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
         <div className='pages'>
           <Link to={'/'}><img src='https://cdn4.iconfinder.com/data/icons/flat-pro-database-set-3/32/table-512.png'/></Link>
           <Link to={'/charts'}><img src='https://w7.pngwing.com/pngs/151/662/png-transparent-pie-chart-diagram-computer-icons-circle-graph-angle-text-orange-thumbnail.png'/></Link>
         </div>
        <p>{new Date().toLocaleString()}</p>
      </header>
      <Route exact path='/' render={() => {
        return (
          <>
            {!filtered ? <Form updateData={updateData} /> : 
            <div className='postFilter'>
              <h3>{state.length} Results</h3>
              <button className='filterReset' onClick={resetFilter}>Reset Filter</button>
            </div>}
            <Analytics data={state}/>
          </>
        )
      }}/>
      <Route exact path='/charts' render={() => <></>}/>
    </>
  );
}

export default App;
