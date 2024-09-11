import { AssetsWidget } from "@/widgets/AssetsWidget";
import { PerformanceWidget } from "@/widgets/PerformanceWidget";
import { PriceWidget } from "@/widgets/PriceWidget";
import classes from './classes.module.scss';
import SelectVariants from "@/features/AddAssetType/ui/SelectVariants";
import Button from "@mui/material/Button/Button";
import { AssetsContext } from '@/features/AddAssetType'
import { useContext } from "react";
import { WidgetWrapper } from '@/shared/ui';
import { Performance } from '@/enteties/Performance'

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
                    <div className={classes["widget"]}>
                        <WidgetWrapper header="ЦЕНА">
                            <PriceWidget prices={prices} />
                        </WidgetWrapper>
                    </div>
                    <div className={classes["widget"]}>
                        <WidgetWrapper header="ПРОИЗВОДИТЕЛЬНОСТЬ" >
                            <Performance />
                        </WidgetWrapper>
                    </div>
                    <div className={classes['widget']}>
                        <WidgetWrapper header="ДОБАВИТЬ АКТИВ" >
                            <SelectVariants setVariant={addTable} />
                        </WidgetWrapper>
                    </div>
                </div>
                <div className={classes["right-column"]}>
                    <div className={classes["assets-widget"]}>
                        <AssetsWidget 
                            header="АКТИВЫ"
                            // assets={assets}
                        />
                    </div>
                </div>
            </div>
    )
}