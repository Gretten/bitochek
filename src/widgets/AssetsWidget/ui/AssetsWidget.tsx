import classes from './classes.module.scss'
import { AssetTable } from '@/enteties/ui';

export const AssetsWidget = ({ header, assets }) => {
    return (
        <div>
            <h3>{header}</h3>
            <div className={classes['assets-tables']}>
                <AssetTable />
                <AssetTable />
            </div>
        </div>
    )
}