import TextField from "@mui/material/TextField/TextField"
import classes from './styles.module.scss'
import Button from "@mui/material/Button/Button";
import SelectVariants from "@/features/AddAssetType/ui/SelectVariants";
import {useFormValidation} from "../model/useFormValidation";

export const AddAsset = ({ header = 'Добавить актив'}) => {

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

    const onSubmit = () => {
        console.log('Форма валидна, отправляем данные:', values);
    };

    return (
        <form className={classes['add-asset-form']} onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit);
          }}>
            <div className={classes['form-header']}>
                <span>{header}</span>
                <span>X</span>
            </div>
            <div className={classes['form-body']}>
                {/* <SelectVariants 
                    setVariant={handleChange} 
                    label="Тип" 
                    isRequired
                    value={values.type}
                /> */}
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
                    label="Цена"
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