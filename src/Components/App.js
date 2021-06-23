import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import Form from './Form';
import Analytics from './Analytics';
import Charts from './Charts';
import getData from '../fetchRequests';
import { Route, Link } from 'react-router-dom';
import {filterData, findImpresByPlat, findClicksByPlat, findImpresByProd, findClicksByProd} from '../calculations';

function App() {
  const [state, setState] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    getData()
    .then(data => {
      setState(data);
      setChartData({
        impresByPlat: findImpresByPlat(data),
        clicksByPlat: findClicksByPlat(data),
        impresByProd: findImpresByProd(data),
        clicksByProd: findClicksByProd(data)
        }); 
    });
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
      <header>
        <h1>Advertsing Analytics</h1>
         <div className='pages'>
           <Link to={'/'} style={{textDecoration: 'none'}}><p className='display-buttons'>Table</p></Link>
           <Link to={'/charts'} style={{textDecoration: 'none'}}><p className='display-buttons'>Chart</p></Link>
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
      <Route exact path='/charts' render={() => <Charts chartData={chartData}/>}/>
    </>
  );
}

export default App;
