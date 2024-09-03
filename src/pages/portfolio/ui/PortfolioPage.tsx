import { AssetsWidget } from "@/widgets/AssetsWidget";
import { PerformanceWidget } from "@/widgets/PerformanceWidget";
import { PriceWidget } from "@/widgets/PriceWidget";
import classes from './classes.module.scss';

export const PortfolioPage = () => {

    const prices = [
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
    
    const assets = [
        {
            assetName: 'Cripto',
            values: [

            ]
        },
        {
            assetName: 'Fiat',
            values: [

            ]
        },
    ]

    return (
        <div className={classes['portfolio']}>
            <div className={classes["left-column"]}>
                <div className={classes["price-widget"]}>
                    <PriceWidget 
                        header="Цена" 
                        prices={prices}
                    />
                </div>
                <div className={classes["performance-widget"]}>
                    <PerformanceWidget 
                        header="Производительность"
                        data={[]} 
                    />
                </div>
            </div>
            <div className={classes["right-column"]}>
                <div className={classes["assets-widget"]}>
                    <AssetsWidget 
                        header="Перечень активов"
                        assets={assets}
                    />
                </div>
            </div>
        </div>
    )
}