import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

// Отрефакторить под принцип "программируй на интрфейсах, а не реализациях"
interface Props {
    setVariant: (newTable: string) => void
}

export default function SelectVariants({ setVariant }: Props) {

  const [value, setValue] = useState<string>("");
    
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value)
    setVariant(event.target.value)
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-standard-label">Тип актива</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value={"crypto"}>Криптовалюта</MenuItem>
          <MenuItem value={"fiat"}>Деньги</MenuItem>
          <MenuItem value={"realty"}>Недвижимость</MenuItem>
          <MenuItem value={"belongings"}>Имущество</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}