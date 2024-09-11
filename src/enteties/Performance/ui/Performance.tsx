import classes from './styles.module.scss'
import { SimpleLineChart } from "@/shared/ui/"

export const Performance = (): React.ReactElement => {
    return (
        <>
            <div className={classes['chart']}>
                <SimpleLineChart />
            </div>
            <div className={classes['additional']}>
            *Изменение цены портфеля за 7 дней
            </div>
        </>
    )
}