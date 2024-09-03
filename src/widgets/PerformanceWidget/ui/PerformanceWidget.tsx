
import { LineChart, Line } from 'recharts';



export const PerformanceWidget = ({ header }) => {
    const data = [
        {name: 'Page A', uv: 348},
        {name: 'Page B', uv: 402},
        {name: 'Page C', uv: 305},
        {name: 'Page D', uv: 388},
        {name: 'Page E', uv: 385},
        {name: 'Page F', uv: 456},
        {name: 'Page G', uv: 384}
      ];

    return (
        <div>
            <h3>
                {header}
            </h3>
            <div>
            <LineChart width={200} height={200} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#32c46b" dot={false} />
            </LineChart>
            </div>
        </div>
    )
}