import classes from './classes.module.scss';
import { useEffect } from 'react';

import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title);

export const SimpleLineChart = ({ height = '100px', width = '150px'}) => {
  useEffect(() => {
    const canvas = document?.getElementById('myChart') as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d');

    if(!ctx) {
        return;
    }

    if (Chart.getChart(ctx)) {
        Chart.getChart(ctx)!.destroy();
      }

    // Создаём новый график
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
    <canvas id="myChart" width={width} height={height}></canvas>
  );
};