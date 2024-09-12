import { AssetsWidget } from "@/widgets/AssetsWidget";
import { PriceWidget } from "@/widgets/PriceWidget";
import classes from './classes.module.scss';
import SelectVariants from "@/features/AddAssetType/ui/SelectVariants";
import { AssetsContext } from '@/features/AddAssetType'
import { AddAsset } from "@/features/AddAsset/ui/AddAsset";
import { useContext, useState } from "react";
import { WidgetWrapper } from '@/shared/ui';
import { Performance } from '@/enteties/Performance'
import { useAddAssetModal } from "@/features/AddAsset";
import { ModalOverlay } from "@/shared/ui/ModalOverlay";

export const PortfolioPage = () => {
    const { addTable } = useContext(AssetsContext);
    const { isOpened, toggleModal } = useAddAssetModal();

    return (
        <div className={classes['portfolio']}>
            <div className={classes["left-column"]}>
                <div className={classes["widget"]}>
                    <WidgetWrapper header="Добавить тип актива">
                        <SelectVariants setVariant={addTable} />
                    </WidgetWrapper>
                </div>
                <div className={classes["widget"]}>
                    <WidgetWrapper header="Цена портфеля" >
                        <PriceWidget />
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
                    <AssetsWidget 
                        header="Активы"
                        onAdd={toggleModal}
                    />
                </div>
            </div>
            <div>
                <ModalOverlay 
                    isOpened={isOpened} 
                    toggleModal={toggleModal}
                >
                    <AddAsset />
                </ModalOverlay>
            </div>
        </div>
    )
}