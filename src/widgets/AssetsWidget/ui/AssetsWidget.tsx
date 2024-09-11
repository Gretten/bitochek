import classes from './classes.module.scss'
import { AssetTable } from '@/shared/ui/';
export const AssetsWidget = ({ header }) => {
    return (
        <div>
            <div className={classes['header-container']}>
                <h3 className={classes['header']}>{header}</h3>
            </div>

            <div className={classes['assets-tables']}>
                {/* todo Здесь будет фабрика, порождающая таблицы в зависимости от типа */}
                
                <AssetTable
                    header={"Крипто"}
                    data={[]}
                    type="crypto"
                />
                <AssetTable
                    header={"Имущество"}
                    data={[]}
                    type="assets"
                />

                <AssetTable
                    header={"Фиатные деньги"}
                    data={[]}
                    type="fiat"
                />
            </div>
        </div>
    )
}