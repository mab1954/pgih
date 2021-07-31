import React from 'react'
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['Sep 19', 'Sep 20', 'Sep 21', 'Sep 22', 'Sep 23', 'Sep24', 'Sep 25'],
    datasets: [
        {
            label: 'Venues',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(67, 56, 202)',
            borderColor: 'rgba(67, 56, 202)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(67, 56, 202)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(67, 56, 202)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            data: [12, 10, 6, 6, 6, 7, 7, 8]
        },
        {
            label: 'Actes',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(56, 202, 66)',
            borderColor: 'rgba(56, 202, 66)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(56, 202, 66)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(56, 202, 66)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            data: [10, 12, 10, 8, 14, 5, 8, 10]
        },
        {
            label: 'Consultation',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(240, 200, 20)',
            borderColor: 'rgba(240, 200, 20)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(240, 200, 20)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(240, 200, 20)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            data: [14, 12, 12, 10, 17, 8, 9, 13]
        }
    ]
};

const Middle = () => {
    return (
        <div className=" bg-white ml-2  shadow-sm w-8/12  border rounded-xl border-gray-100">

            <div>
                <Line data={data} />
            </div>
        </div>
    )
}

export default Middle