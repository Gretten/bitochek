import classes from './classes.module.scss';

export const PriceWidget = ({ prices }: { prices?: []}) => {

    const mock = [
        {
            currency: 'RUB',
            value: 123,
        },
        {
            currency: 'USD',
            value: 456,
        },
        {
            currency: 'UZS',
            value: 789,
        },
    ];

    return (
        <div className={classes['content']}>
            {(prices || mock).map(({ currency, value }) => (
                <div key={currency}>
                    <span>{currency}</span>
                    <span>:</span>
                    <span>{value}</span>
                </div>
            ))}
    </div>
    )
}