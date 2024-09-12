import { AssetsWidget } from "@/widgets/AssetsWidget";
import { PriceWidget } from "@/widgets/PriceWidget";
import classes from './classes.module.scss';
import { SelectVariants } from "@/shared/ui";
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
                <div className={`${classes["widget"]} ${classes["green"]}`}>
                    <WidgetWrapper 
                        header="Добавить тип актива"
                        styles={{ backgroundColor: 'rgba(228, 255, 200, 0.967)'}}
                    >
                        <SelectVariants 
                            setVariant={addTable} 
                            label="Тип" 
                            items={[
                                {
                                    name: 'Криптовалюта',
                                    value: 'crypto'
                                },
                                {
                                    name: 'Деньги',
                                    value: 'fiat'
                                }
                            ]}
                        />
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