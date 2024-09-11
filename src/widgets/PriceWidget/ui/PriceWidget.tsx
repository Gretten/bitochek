import classes from './classes.module.scss';

export const PriceWidget = ({ prices }) => {
    return (
        <div className={classes['content']}>
            {prices.map(({ currency, value }) => (
                <div key={currency}>
                    <span>{currency}</span>
                    <span>:</span>
                    <span>{value}</span>
                </div>
            ))}
    </div>
    )
}