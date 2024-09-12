import TextField from "@mui/material/TextField/TextField"
import classes from './styles.module.scss'
import Button from "@mui/material/Button/Button";
import SelectVariants from "@/features/AddAssetType/ui/SelectVariants";

export const AddAsset = ({ header = 'Добавить актив'}) => {

    return (
        <form className={classes['add-asset-form']}>
            <div className={classes['form-header']}>
                <span>{header}</span>
                <span>X</span>
            </div>
            <div className={classes['form-body']}>
                <SelectVariants 
                    setVariant={() => { console.log('hello!')}} 
                    label="Тип" 
                    isRequired
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Название"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Количество"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Цена"
                />
            </div>
            <div className={classes['form-footer']}>
                <Button>Добавить!</Button>
            </div>
        </form>
    )
}