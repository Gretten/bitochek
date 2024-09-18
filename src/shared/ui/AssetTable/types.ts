import { TableCellProps } from "@mui/material";

type TableRows = TableRow[];

interface Column {
    name: string;
    align?: TableCellProps['align'] | null;
}

export interface TableRow {
    name: string,
    count: number,
    price: number,
    sum: number,
}

export type Columns = Column[];

export interface AssetTableProps {
    header: string;
    rows: TableRows;
    total: number;
    columns?: Columns;
}