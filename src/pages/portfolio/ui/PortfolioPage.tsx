import { AssetsWidget } from "@/widgets/AssetsWidget";
import { PerformanceWidget } from "@/widgets/PerformanceWidget";
import { PriceWidget } from "@/widgets/PriceWidget";
import classes from './classes.module.scss';

export const PortfolioPage = () => {
    return (
        <>
            <div className={classes['portfolio']}>
                <div className={classes["left-column"]}>
                    <div className={classes["price-widget"]}>
                        <PriceWidget />
                    </div>
                    <div className={classes["performance-widget"]}>
                        <PerformanceWidget />
                    </div>
                </div>
                <div className={classes["right-column"]}>
                    <div className={classes["assets-widget"]}>
                        <AssetsWidget />
                    </div>
                </div>
            </div>
        </>
    )
}