import classes from './classes.module.scss'
import { AssetTable } from '@/enteties/ui';

export const AssetsWidget = ({ header, assets }) => {
    return (
        <div>
            <div className={classes['header-container']}>
                <h3 className={classes['header']}>{header}</h3>
                <div className={classes['header-add']}>
                    <span className={classes['header-add-icon']}>+</span>
                </div>
            </div>
            
            <div className={classes['assets-tables']}>
                <AssetTable />
                <AssetTable />
            </div>
        </div>
    )
}