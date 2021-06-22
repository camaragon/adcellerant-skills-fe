import '../styles/Charts.css';
import {Pie} from 'react-chartjs-2';
import {useState, useEffect}  from 'react';
import getData from '../fetchRequests';
import {findImpresByPlat, findClicksByPlat, findImpresByProd, findClicksByProd} from '../calculations';

function Charts({chartData}) {
    return (
        <section className='chart-section'>
            <div className='chart-container'>
                <h2>Impressions by Platform</h2>
                <Pie
                    data={{
                        labels: Object.keys(chartData.impresByPlat),
                        datasets: [{
                            data: Object.values(chartData.impresByPlat),
                            backgroundColor: ['red', 'blue', 'green', 'yellow', 'orange']
                        }]
                    }}
                    height='500'
                    width='500'
                    options={{ responsive: false, maintainAspectRatio: false }}
                />
            </div>
            <div className='chart-container'>
                <h2>Clicks by Platform</h2>
                <Pie
                    data={{
                        labels: Object.keys(chartData.clicksByPlat),
                        datasets: [{
                            data: Object.values(chartData.clicksByPlat),
                            backgroundColor: ['red', 'blue', 'green', 'yellow', 'orange']
                        }]
                    }}
                    height='500'
                    width='500'
                    options={{ responsive: false, maintainAspectRatio: false }}
                />
            </div>
        </section>
    )
};

export default Charts;