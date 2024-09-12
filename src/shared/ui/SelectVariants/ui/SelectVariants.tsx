import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

// Отрефакторить под принцип "программируй на интрфейсах, а не реализациях"
interface Props {
    label: string;
    isRequired?: boolean;
    items: {
      value: string;
      name: string;
    }[];
    setVariant: (newTable: string) => void
}

export const SelectVariants = ({ setVariant, label = "Тип", isRequired = false, items }: Props) => {

  const [value, setValue] = useState<string>("");
    
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value)
    setVariant(event.target.value)
  };

  return (
    <div>
      <FormControl fullWidth sx={{ m: 1, minWidth: 200 }} style={{ margin: '0'}} required={isRequired}>
        <InputLabel id="label">{label}</InputLabel>
        <Select
          label="Тип"
          labelId="label"
          id="select"
          value={value}
          onChange={handleChange}
        >
          
             {items?.length > 0 ? items.map(item => {
              return (
                <MenuItem value={item.value}>{item.name}</MenuItem>
              )
            })
            : null}
          
        </Select>
      </FormControl>
    </div>
  );
}