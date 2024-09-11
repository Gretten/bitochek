import { ModalOverlay } from "@/shared/ui/ModalOverlay"
import TextField from "@mui/material/TextField/TextField"
import { useModal } from "../model/useModal";
import classes from './styles.module.scss'
import Button from "@mui/material/Button/Button";

export const AddAsset = ({ header = 'Добавить актив'}) => {

    return (
        <form className={classes['add-asset-form']}>
            <div className={classes['form-header']}>
                <span>{header}</span>
                <span>X</span>
            </div>
            <div className={classes['form-body']}>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Тип актива"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Название"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Количество"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Цена"
                />
            </div>
            <div className={classes['form-footer']}>
                <Button>Добавить!</Button>
            </div>
        </form>
    )
}