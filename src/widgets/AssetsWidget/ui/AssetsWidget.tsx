import classes from './classes.module.scss'
import Button from '@mui/material/Button/Button';
import { AssetTable } from '@/shared/ui/';
import { TableRow } from '@/shared/ui/AssetTable/types';

export interface Table {
    header: string;
    rows: TableRow[];
    total: number;
}

interface AssetWidgetProps {
    header: string;
    totalPrice: number;
    onAddSingleAsset: () => void;
    tables: Table[] | null;
}

export const AssetsWidget = ({ header, onAddSingleAsset, tables, totalPrice }: AssetWidgetProps) => {   

    return (
        <div>
            <div className={classes['header-container']}>
                <h3 className={classes['header']}>{header}</h3>
                <Button onClick={onAddSingleAsset}>Новый актив</Button>
            </div>

            <div className={classes['assets-tables']}>

                {
                
                tables ? tables.map((table) => {

                        const { header, rows, total } = table;
                        return (
                            <AssetTable 
                                key={header}
                                header={header}
                                rows={rows}
                                total={total}
                            />
                        )
                    }) : 'Добавьте первый тип актива!'
                } 

                {/* {
                    totalPrice && totalPrice > 0 && (
                        <div className={classes['total']}>
                            ИТОГО: ${totalPrice}
                        </div>
                    )
                } */}
            </div>
        </div>
    )
}