import TextField from "@mui/material/TextField/TextField"
import classes from './styles.module.scss'
import Button from "@mui/material/Button/Button";
import {SelectVariants} from "@/shared/ui";
import {useFormValidation} from "../model/useFormValidation";
import CloseIcon from '@mui/icons-material/Close';

export const AddAsset = ({ header = 'Добавить актив', addAsset, onClose }) => {

    const {
        values,
        errors,
        errorMessages,
        handleChange,
        handleSubmit,
    } = useFormValidation({
        type: '',
        name: '',
        count: '',
        price: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(() => addAsset(values));
        onClose();
    };

    return (
        <form 
        className={classes['add-asset-form']} 
            onSubmit={onSubmit}>
            <div className={classes['form-header']}>
                <span>{header}</span>
                <span 
                    className={classes['form-on-close']} 
                    onClick={onClose}
                >
                    <CloseIcon />
                </span>
            </div>
            <div className={classes['form-body']}>
                <SelectVariants 
                    onChange={handleChange} 
                    label="Тип" 
                    isRequired
                    items={[
                        {
                            name: 'Криптовалюта',
                            value: 'crypto'
                        },
                        {
                            name: 'Деньги',
                            value: 'fiat'
                        }
                    ]}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Название"
                    name="name"
                    helperText={errorMessages.name || null}
                    value={values.name}
                    onChange={handleChange}
                    error={errors.name}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Количество"
                    name="count"
                    helperText={errorMessages.count || null}
                    error={errors.count}
                    value={values.count}
                    onChange={handleChange}
                    
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Цена (USD)"
                    name="price"
                    helperText={errorMessages.price || null}
                    error={errors.price}
                    value={values.price}
                    onChange={handleChange}
                />
            </div>
            <div className={classes['form-footer']}>
                <Button type="submit">Добавить!</Button>
            </div>
        </form>
    )
}