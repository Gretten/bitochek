export const PriceWidget = ({ header, prices }) => {
    return (
        <div>
            <h3>{header}</h3>
            {
                prices.map(({ currency, value }) => (
                    <div key={currency}>
                        <span>{currency}</span>
                        <span>:</span>
                        <span>{value}</span>
                    </div>
                ))
            }
            <div>
                +
            </div>
        </div>
    )
}