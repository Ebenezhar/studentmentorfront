import React from 'react'
import {Doughnut} from 'react-chartjs-2'

function DoghnutChart() {
    let chartData = {
        datasets: [{
            // labels:"# of Votes",
            data: [55,15,30],
            backgroundColor:['rgb(78 115 223)', 'rgb(54 185 204)', 'rgb(28 200 138)',],
            hoverOffset: 5
        }],
        labels: ['Direct', 'Social', 'Referral',],
    }
  return (
    <div>
        <Doughnut data = {chartData} width={100} height={200} options = {{maintainAspectRatio: false,cutout: 250}}/>        
    </div>
  )
}

export default DoghnutChart