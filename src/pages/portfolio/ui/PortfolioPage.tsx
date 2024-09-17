import { useContext } from "react";
import classes from './classes.module.scss';
import { AssetsWidget } from "@/widgets/AssetsWidget";
import { SelectVariants, ModalOverlay, WidgetWrapper } from "@/shared/ui";
import { Performance } from '@/enteties/Performance'
import { Price } from "@/enteties/Price";
import { useAddAssetModal } from "@/features/AddAsset";
import { AddAsset } from "@/features/AddAsset/ui/AddAsset";
import { AssetsContext } from '@/features/AddAssetType'

export const PortfolioPage = () => {    
    const { isOpened, toggleModal } = useAddAssetModal();

    const { state: tableState, addTable, addAsset } = useContext(AssetsContext);

    const calculateTotal = (tables) => {
        let sum = 0;
        if(Object.keys(tableState.tables).length) {
            Object.values(tableState.tables).forEach(el => {
                sum += el.total;
            })
        }

        return sum;
    }

    const totalPrice = calculateTotal(tableState)

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
                        <Price totalPrice={totalPrice} />
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
                        tables={tableState.tables}
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
                    <AddAsset addAsset={addAsset} onClose={toggleModal}/>
                </ModalOverlay>
            </div>
        </div>
    )
}