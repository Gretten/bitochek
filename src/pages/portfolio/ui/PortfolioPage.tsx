import { AssetsWidget } from "@/widgets/AssetsWidget";
import { PerformanceWidget } from "@/widgets/PerformanceWidget";
import { PriceWidget } from "@/widgets/PriceWidget";
import classes from './classes.module.scss';
import SelectVariants from "@/features/AddAssetType/ui/SelectVariants";
import Button from "@mui/material/Button/Button";
import { AssetsContext } from '@/features/AddAssetType'
import { useContext } from "react";

export const PortfolioPage = () => {
    const { addTable } = useContext(AssetsContext);

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
                            header="ЦЕНА" 
                            prices={prices}
                        />
                    </div>
                    <div className={classes["performance-widget"]}>
                        <PerformanceWidget 
                            header="ПРОИЗВОДИТЕЛЬНОСТЬ"
                        />
                    </div>
                    <div className={classes['add-widget']}>
                        <h3 className={classes['header']}>
                            ДОБАВИТЬ АКТИВ
                        </h3>
                        <SelectVariants 
                            setVariant={addTable}
                        />
                    </div>
                </div>
                <div className={classes["right-column"]}>
                    <div className={classes["assets-widget"]}>
                        <AssetsWidget 
                            header="АКТИВЫ"
                            assets={assets}
                        />
                    </div>
                </div>
            </div>
    )
}