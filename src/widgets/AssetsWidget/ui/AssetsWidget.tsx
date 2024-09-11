import { useContext } from 'react';
import classes from './classes.module.scss'
import { AssetTable } from '@/shared/ui/';
import { AssetsContext } from '@/features/AddAssetType';
export const AssetsWidget = ({ header }) => {

    const { state } = useContext(AssetsContext);
    const { tables } = state;

    enum names {
        "crypto" = 'Криптовалюта',
        "fiat" = "Фиатные Деньги",
        "realEstate" = 'Недвидимость',
        "belongings" = 'Имущество',
    }

    return (
        <div>
            <div className={classes['header-container']}>
                <h3 className={classes['header']}>{header}</h3>
            </div>

            <div className={classes['assets-tables']}>

                {
                
                tables.length > 0 ? tables.map((table) => {
                        return (
                            <AssetTable 
                                type={table}
                                header={names[table]}
                                data={[]}
                            />
                        )
                    }) : 'No content'
                } 
            </div>
        </div>
    )
}