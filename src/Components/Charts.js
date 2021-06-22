import '../styles/Charts.css';
import {Pie} from 'react-chartjs-2';
import {useState, useEffect}  from 'react';
import getData from '../fetchRequests';
import {findImpresByPlat, findClicksByPlat, findImpresByProd, findClicksByProd} from '../calculations';

function Charts({chartData}) {
    return (
        <div>
            <Pie
                data={{
                    labels: Object.keys(chartData.impresByPlat),
                    datasets: [{
                        data: Object.values(chartData.impresByPlat),
                        backgroundColor: ['red', 'blue', 'green', 'yellow', 'orange']
                    }]
                }}
                height='600'
                width='600'
                options={{ responsive: false, maintainAspectRatio: false }}
            />
            <Pie
                data={{
                    labels: [1, 2, 3],
                    datasets: [{
                        data: [2000, 4000, 2850],
                        backgroundColor: ['red', 'blue', 'green', 'yellow', 'orange']
                    }]
                }}
                // height='600'
                // width='600'
                options={{ responsive: true, maintainAspectRatio: true }}
            />
        </div>
    )
};

export default Charts;