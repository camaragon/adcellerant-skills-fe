import '../styles/Charts.css';
import {Pie} from 'react-chartjs-2';

const Charts = () => {
    return (
        <div>
        <Pie
            data={{
                labels: [1, 2, 3],
                datasets: [{
                    data: [2000, 4000, 2850],
                    backgroundColor: ['red', 'blue', 'green']
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
                    backgroundColor: ['red', 'blue', 'green']
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