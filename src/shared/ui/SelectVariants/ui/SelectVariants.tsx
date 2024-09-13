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
    onChange: <T>(arg: T) => void;
}

export const SelectVariants = ({ onChange, label = "Тип", isRequired = false, items }: Props) => {

  const [value, setValue] = useState<string>("");
    
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value)
    onChange(event)
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
          name='type'
          onChange={handleChange}
        >
          
             {items?.length > 0 ? items.map(item => {
              return (
                <MenuItem 
                  key={item.value}
                  value={item.value}
                >{item.name}</MenuItem>
              )
            })
            : null}
          
        </Select>
      </FormControl>
    </div>
  );
}