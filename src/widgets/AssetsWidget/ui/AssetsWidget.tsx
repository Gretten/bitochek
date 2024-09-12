import { useContext } from 'react';
import classes from './classes.module.scss'
import { AssetTable } from '@/shared/ui/';
import { AssetsContext } from '@/features/AddAssetType';
import Button from '@mui/material/Button/Button';

export const AssetsWidget = ({ header, onAdd }) => {

    const { state } = useContext(AssetsContext);
    const { tables } = state;

    enum names {
        "crypto" = 'Криптовалюта',
        "fiat" = "Деньги",
        "realty" = 'Недвижимость',
        "belongings" = 'Имущество',
    }

    return (
        <div>
            <div className={classes['header-container']}>
                <h3 className={classes['header']}>{header}</h3>
                <Button onClick={onAdd}>Новый актив</Button>
            </div>

            <div className={classes['assets-tables']}>

                {
                
                tables.length > 0 ? tables.map((table) => {
                        return (
                            <AssetTable 
                                key={table + (Math.random() * 5)}
                                header={names[table]}
                            />
                        )
                    }) : 'Добавьте первый тип актива!'
                } 
            </div>
        </div>
    )
}