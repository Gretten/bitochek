import { useContext } from "react";
import classes from './classes.module.scss';
import { AssetsWidget } from "@/widgets/AssetsWidget";
import { SelectVariants, ModalOverlay, WidgetWrapper } from "@/shared/ui";
import { Performance } from '@/enteties/Performance'
import { Price } from "@/enteties/Price";
import { useAddAssetModal } from "@/features/AddAsset";
import { AddAsset } from "@/features/AddAsset/ui/AddAsset";
import { AssetsContext } from '@/features/AddAssetType'
import { tablesAdapter } from "../lib/tablesAdapter";

export const PortfolioPage = () => {    
    const { isOpened, toggleModal } = useAddAssetModal();

    const { tables, total, addTable, addAsset } = useContext(AssetsContext);
    const tablesData = tablesAdapter(tables)

    return (
        <div className={classes['portfolio']}>
            <div className={classes["left-column"]}>
                <div className={`${classes["widget"]} ${classes["green"]}`}>
                    <WidgetWrapper 
                        header="Добавить тип актива"
                        styles={{ backgroundColor: 'rgba(228, 255, 200, 0.967)'}}
                    >
                        <SelectVariants 
                            onChange={(e) => addTable(e.target.value)} 
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
                        <Price 
                            totalPrice={total} 
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
                    <AssetsWidget 
                        tables={tablesData}
                        totalPrice={total}
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