import { SimpleLineChart } from "@/enteties/ui/SimpleLineChart/SimpleLineChart"


export const PerformanceWidget = ({ header }) => {
    
    return (
        <div>
            <h3>
                {header}
            </h3>
            <div>
                <SimpleLineChart />
            </div>
        </div>
    )
}