// import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';
import '../Style/application.css';
export default function BodyApp() {
    const donut={
          
        series: [44, 55, 13, 33],
        
        options: {
          chart: {
            width: 380,
            type: 'donut',
          },
          labels:['food','Transport','Housing','Education'],
          dataLabels: {
            enabled: false
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                show: false
              }
            }
          }],
          legend: {
            position: 'right',
            offsetY: 0,
            height: 230,
          }
        },
      
      
      };
    
    return (
    <div className="body-app-container">
        <div className='donut-charts-app'>
            <div id='title-donut-chart'>Your Mounthly Detail</div>
            <Chart className='donutchart' options={donut.options} series={donut.series} type="donut" width={300} />
        </div>
    </div>)
}