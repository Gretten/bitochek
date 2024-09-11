import { SimpleLineChart } from "@/shared/ui/SimpleLineChart/SimpleLineChart"
import classes from './classes.module.scss'

export const PerformanceWidget = ({ header }) => {
    
    return (
        <div className={classes['container']}>
            <h3 className={classes['header']}>
                {header}
            </h3>
            <div className={classes['chart']}>
                 <SimpleLineChart />
            </div>
            <div className={classes['additional']}>
                 *Изменение цены портфеля за 7 дней
            </div>
        </div>
    )
}