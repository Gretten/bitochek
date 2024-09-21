import { useContext } from "react";
import classes from './classes.module.scss';
import { AssetsTableWidget } from "@/widgets/AssetsTableWidget";
import { ModalOverlay, WidgetWrapper } from "@/shared/ui";
import { Performance } from '@/enteties/Performance'
import { Price } from "@/enteties/Price";
import { useAddAssetModal } from "@/features/AddAsset";
import { AddAsset } from "@/features/AddAsset/ui/AddAsset";
import { AssetsContext } from '@/features/Asset'
import { getTotalPrice, transformAssetsToTables } from "../lib";

export const PortfolioPage = () => {    
    const { isOpened, toggleModal } = useAddAssetModal();

    const { assets, addAsset } = useContext(AssetsContext);
    const tables = transformAssetsToTables(assets);
    const totalPrice = getTotalPrice(assets);

    return (
        <div className={classes['portfolio']}>
            <div className={classes["left-column"]}>
                 <div className={`${classes["widget"]}`}>
                    <WidgetWrapper 
                        header="Цена портфеля" 
                        styles={{ backgroundColor: 'rgba(228, 255, 200, 0.967)'}} 
                    >
                        <Price 
                            totalPrice={totalPrice} 
                        />
                    </WidgetWrapper>
                </div>
                <div className={classes['widget']}>
                    <WidgetWrapper header="Производительность" >
                        <Performance />
                    </WidgetWrapper>
                </div>
            </div>
            <div className={classes["right-column"]}>
                <div className={classes["assets-widget"]}>
                    <AssetsTableWidget 
                        tables={tables}
                        header="Активы"
                        onAddSingleAsset={toggleModal}
                    />
                </div>
            </div>
            <div>
                <ModalOverlay 
                    isOpened={isOpened} 
                    toggleModal={toggleModal}
                >
                    <AddAsset 
                        addAsset={addAsset} 
                        onClose={toggleModal}
                    />
                </ModalOverlay>
            </div>
        </div>
    )
}