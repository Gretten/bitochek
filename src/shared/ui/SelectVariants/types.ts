import { SelectChangeEvent } from "@mui/material/Select/SelectInput";

export interface SelectVariantsProps {
    label: string;
    isRequired?: boolean;
    items: {
      value: string;
      name: string;
    }[];
    onChange: (arg: SelectChangeEvent) => void;
}
