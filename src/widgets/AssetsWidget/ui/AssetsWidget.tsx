import classes from './classes.module.scss'
import Button from '@mui/material/Button/Button';
import { AssetTable } from '@/shared/ui/';
import { names } from '../config';

export const AssetsWidget = ({ header, onAdd, tables, totalPrice }) => {   

    const data = Object.entries(tables);

    return (
        <div>
            <div className={classes['header-container']}>
                <h3 className={classes['header']}>{header}</h3>
                <Button onClick={onAdd}>Новый актив</Button>
            </div>

            <div className={classes['assets-tables']}>

                {
                
                data.length > 0 ? data.map((table) => {

                        const key = table[0] + (Math.random() * 5);
                        const headerKey = names[table[0]];
                        const data = table[1];
                        return (
                            <AssetTable 
                                key={key}
                                header={headerKey}
                                rows={data.rows}
                                total={data.total}
                            />
                        )
                    }) : 'Добавьте первый тип актива!'
                } 

                {
                data.length > 0 && (
                        <div className={classes['total']}>
                            ИТОГО: ${totalPrice}
                        </div>
                    )
                }
            </div>
        </div>
    )
}