import classes from './classes.module.scss'
import Button from '@mui/material/Button/Button';
import { AssetTable } from '@/shared/ui/';

export const AssetsWidget = ({ header, onAdd, tables }) => {    

    const content = Object.entries(tables);

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
                
                content.length > 0 ? content.map((table) => {

                        const key = table[0] + (Math.random() * 5);
                        const headerKey = names[table[0]];
                        const rows = table[1];
                        return (
                            <AssetTable 
                                key={key}
                                header={headerKey}
                                data={rows}
                            />
                        )
                    }) : 'Добавьте первый тип актива!'
                } 
            </div>
        </div>
    )
}