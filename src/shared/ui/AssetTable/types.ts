import { TableCellProps } from "@mui/material";

interface Column {
    name: string;
    align?: TableCellProps['align'] | null;
}

export interface TableRow {
    [key: string]: string;
}

export type Columns = Column[];

export interface AssetTableProps {
    header: string;
    rows: TableRow[];
    total: number;
    columns?: Columns;
}