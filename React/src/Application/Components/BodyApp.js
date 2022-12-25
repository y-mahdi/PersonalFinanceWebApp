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
      const areaspendbytype={
          
        series: [{
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100]
        }, {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41]
        }],
        options: {
          chart: {
            height: 350,
            type: 'area'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
        },
      
      
      };
      const areaspendbymount={
          
        series: [{
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100]
        }],
        options: {
          chart: {
            height: 350,
            type: 'area'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
        },
      
      
      };
    
    return (
    <div className="body-app-container">
        <div className='part1-charts-panel'>
            <div className='donut-charts-app'>
                <div id='title-donut-chart'>Your Mounthly Detail</div>
                <Chart className='donutchart' options={donut.options} series={donut.series} type="donut" width={360} />
            </div>
            <div className='area-charts-app'>
                <div id='title-donut-chart'>Your Spend for Every Mounth by Types</div>
                <Chart options={areaspendbytype.options} series={areaspendbytype.series} type='area' width={670} height={300}/>
            </div>

        </div>
        <div className='part2-charts-panel'>
            <div className='area1-charts-app'>
                <div id='title-donut-chart'>
                    Your Spend for Every Mounth
                </div>
                <Chart options={areaspendbymount.options} series={areaspendbymount.series} type='area' width={1000} height={300}/>
            </div>
        </div>
    </div>)
}