import TextField from "@mui/material/TextField/TextField"
import Button from "@mui/material/Button/Button";
import CloseIcon from '@mui/icons-material/Close';
import classes from './styles.module.scss'
import { SelectVariants } from "@/shared/ui";
import { useFormValidation } from "../model";

export const AddAsset = ({ header = 'Добавить актив', addAsset, onClose }) => {

    interface Inputs {
        type: string,
        name: string,
        count: string,
        price: string,
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useFormValidation<Inputs>();

    const onSubmit = (data: Inputs) => {
        addAsset({
            ...data,
            count: Number(data.count),
            price: Number(data.price),
        });
        onClose();
    };

    return (
        <form 
            className={classes['add-asset-form']} 
            onSubmit={handleSubmit(onSubmit)}
        >
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
                    {...register("type")}
                    label="Тип"
                    required
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
                    {...register('name')}
                    required
                    id="outlined-required"
                    label="Название"
                    helperText={errors.name || null}
                    error={!!errors.name}
                />
                <TextField
                    {...register('count')}
                    required
                    id="outlined-required"
                    label="Количество"
                    helperText={errors.count || null}
                    error={!!errors.count}
                />
                <TextField
                    {...register('price')}
                    required
                    id="outlined-required"
                    label="Цена (USD)"
                    helperText={errors.price || null}
                    error={!!errors.price}
                />
            </div>
            <div className={classes['form-footer']}>
                <Button type="submit">Добавить!</Button>
            </div>
        </form>
    )
}