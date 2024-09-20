import { SelectChangeEvent } from "@mui/material/Select/SelectInput";
import React from "react";

export interface SelectVariantsProps {
    label: string;
    required?: boolean;
    name: string,
    items: {
      value: string;
      name: string;
    }[];
    onChange: (e: SelectChangeEvent<string>) => void;
}
