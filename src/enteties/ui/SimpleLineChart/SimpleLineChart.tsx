import classes from './classes.module.scss';
import { useEffect } from 'react';

import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title);

export const SimpleLineChart = () => {
  useEffect(() => {
    const canvas = document?.getElementById('my-chart') as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d');

    if(!ctx) {
        return;
    }
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль'],
        datasets: [{
          label: 'Моя прямая',
          data: [65, 59, 80, 81, 56, 55, 40],
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

    return () => {
        chart.destroy();
    }
  }, []);

  return (
    <canvas id="my-chart" height="250" width="250"></canvas>
  );
};