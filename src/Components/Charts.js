import '../styles/Charts.css';
import {Pie} from 'react-chartjs-2';
import {useState, useEffect}  from 'react';
import {findImpresByPlat, findClicksByPlat, findImpresByProd, findClicksByProd} from '../calculations';

const Charts = () => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        setChartData({
            impresByPlat: findImpresByPlat(data),
            clicksByPlat: findClicksByPlat(data),
            impressByProd: findImpresByProd(data),
            clicksByProd: findClicksByProd(data)
            });
      }, []);

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