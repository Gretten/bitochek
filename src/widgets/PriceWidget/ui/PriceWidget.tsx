import classes from './classes.module.scss';

export const PriceWidget = ({ totalPrice }: { totalPrice: number}) => {

    const uzs = totalPrice * 11245;
    const rub = totalPrice * 97;
    const usd = totalPrice;

    const x = [uzs, usd, rub];

    return (
        <div className={classes['content']}>
            {x.map((el) => (
                <div key={[el += Math.random() * 5]}>
                    <span>{[el]}</span>
                    <span>:</span>
                    <span>{el}</span>
                </div>
            ))}
    </div>
    )
}