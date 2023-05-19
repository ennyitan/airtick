import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  month: any
constructor(
) {
  Chart.register(...registerables)
 }

ngOnInit(): void {
  
      const t_ctx = document.getElementById('myLineChart') as unknown as any;
      const ctx = t_ctx.getContext('2d');
      const myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jly', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
              label: ` 20 of Users`,
              data: [65, 59, 80, 81, 56, 55, 40, 69, 44, 75, 86, 34],
              backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(54, 162, 235)',
                  "rgb(204 169 199)",
                  'rgb(255, 206, 86)',
                  "rgb(6 118 39)",
                  "rgb(246,109,214)",
                  'rgb(75, 192, 192)',
                  'rgb(153, 102, 255)',
                  'rgb(255, 159, 64)',

              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 3
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          },
          plugins: {
            title: {
              display: true,
              text: 'Chart.js Bar Chart - Stacked'
            },
          },
          responsive: true,
          interaction: {
          intersect: false,
           },
      }
  });
  
  }

}

