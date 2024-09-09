import classes from './styles.module.scss';
import flower from '@/assets/flower-min.png'

export const UnderConstruction = () => {
    return (
        <div className={classes['container']}>
            <div className={classes['']}>
                <img src={flower} alt="flower" />
            </div>
            <div className={classes['header']}>
                <h4>Страница в разработке</h4>
            </div>
        </div>
    )
}