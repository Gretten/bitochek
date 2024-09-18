import classes from './classes.module.scss';
import { currencies, getListData, volatiles } from '../model'

export const PriceWidget = ({ totalPrice }: { totalPrice: number}) => {

    const list = getListData(currencies, volatiles, totalPrice);

    return (
        <div className={classes['content']}>
            {list.map((el) => (
                <div key={el.name} className={classes['prices']}>
                    <span className={classes['name']}>{el.name}</span>
                    <span>:</span>
                    <span className={classes['value']}>{el.value}</span>
                </div>
            ))}
    </div>
    )
}
