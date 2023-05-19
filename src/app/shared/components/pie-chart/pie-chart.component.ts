import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  month: any
  constructor(
  ) {
    Chart.register(...registerables)
   }
  
  ngOnInit(): void {
    
        const t_ctx = document.getElementById('pieChart') as unknown as any;
        const ctx = t_ctx.getContext('2d');
        const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: [
            'Red',
            'Blue',
            'Yellow'
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
          }]
        },
        // options: {
        //     scales: {
        //         y: {
        //             beginAtZero: true
        //         }
        //     },
        //     plugins: {
        //       title: {
        //         display: true,
        //         text: 'Chart.js Bar Chart - Stacked'
        //       },
        //     },
        //     responsive: true,
        //     interaction: {
        //     intersect: false,
        //      },
        // }
    });
    
    }
}
