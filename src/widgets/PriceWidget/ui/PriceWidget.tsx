import classes from './classes.module.scss';

export const PriceWidget = ({ header, prices }) => {
    return (
        <div>
            <h3 className={classes['header']}>{header}</h3>
            <div className={classes['content']}>
                {prices.map(({ currency, value }) => (
                    <div key={currency}>
                        <span>{currency}</span>
                        <span>:</span>
                        <span>{value}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}