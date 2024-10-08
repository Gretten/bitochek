import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import { SelectVariantsProps } from '../types';

export const SelectVariants = ({ onChange, label = "Тип", items, name, required = false }: SelectVariantsProps) => {

  const [value, setValue] = useState<string>("");
    
  const handleChange = (event: SelectChangeEvent<string>) => {
    if(event && event.target) {
        setValue(event.target.value)
        onChange(event)
    }
  };

  return (
    <div>
      <FormControl fullWidth sx={{ m: 1, minWidth: 200 }} style={{ margin: '0'}} required={required}>
        <InputLabel id="label">{label}</InputLabel>
        <Select
          label="Тип"
          labelId="label"
          id="select"
          value={value}
          name={name}
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