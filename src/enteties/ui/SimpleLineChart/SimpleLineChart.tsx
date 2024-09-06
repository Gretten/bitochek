import classes from './classes.module.scss';
import { ReactElement, useEffect, useState } from 'react';

import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title);

export const SimpleLineChart = (): ReactElement | null => {

  // const [chart, setChart] = useState<Chart | null>(null);

  useEffect(() => {
    const canvas = document.getElementById('my-chart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if(!ctx) {
        return;
    }

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
        datasets: [{
          data: [45, 59, 61, 50, 56, 65, 85],
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          tension: 0.2,
        }]
      },
      options: {
        maintainAspectRatio: false,
        scales: {
            x: {
              display: false, 
            },
            y: {
              display: false, 
            }
          },
          plugins: {
            legend: {
              display: false, 
            },
            tooltip: {
              enabled: false,
            },
          },
          elements: {
            point: {
              radius: 0,
            },
          },
      }
    });

    // setChart(chart);

    return () => {
        chart.destroy();
    }
  }, []);

  return (
    // chart ? <canvas id="my-chart" height="250" width="250"></canvas> : null
    <canvas id="my-chart" height="250" width="250"></canvas>
  );
};