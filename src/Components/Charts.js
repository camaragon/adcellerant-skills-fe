import '../styles/Charts.css';
import {Pie, Bar} from 'react-chartjs-2';

function Charts({chartData}) {
    const chartColors = [
        '#FF6384', 
        '#36A2EB', 
        '#FFCE56', 
        '#1dea49', 
        '#ef1aae', 
        '#0b04fa', 
        '#9a1aa0', 
        '#3f218c', 
        '#ebfc05', 
        '#42e6d0', 
        '#bb0935', 
        '#5d9b35', 
        '#ffa500', 
        '#ff2500'
    ];
    
    return (
        <section className='chart-section'>
            <div className='chart-container'>
                <h2>Impressions by Platform</h2>
                <Pie
                    data={{
                        labels: Object.keys(chartData.impresByPlat),
                        datasets: [{
                            data: Object.values(chartData.impresByPlat),
                            backgroundColor: chartColors.slice(0, 5)
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
                            backgroundColor: chartColors.slice(0, 5)
                        }]
                    }}
                    height='500'
                    width='500'
                    options={{ responsive: false, maintainAspectRatio: false }}
                />
            </div>
            <div className='chart-container'>
                <h2>Impressions by Product</h2>
                <Bar
                    data={{
                        labels: Object.keys(chartData.impresByProd),
                        datasets: [{
                            data: Object.values(chartData.impresByProd),
                            backgroundColor: chartColors
                        }]
                    }}
                    height='500'
                    width='500'
                    options={{ responsive: false, maintainAspectRatio: false, plugins: { legend: { display: false}}}}
                />
            </div>
            <div className='chart-container'>
                <h2>Clicks by Product</h2>
                <Bar
                    data={{
                        labels: Object.keys(chartData.clicksByProd),
                        datasets: [{
                            data: Object.values(chartData.clicksByProd),
                            backgroundColor: chartColors
                        }]
                    }}
                    height='500'
                    width='500'
                    options={{ responsive: false, maintainAspectRatio: false, plugins: { legend: { display: false}}}}
                />
            </div>
        </section>
    )
};

export default Charts;