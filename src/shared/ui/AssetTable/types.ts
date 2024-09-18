import { TableCellProps } from "@mui/material";

interface SingleTableRow {
    name: string,
    count: number,
    price: number,
    sum: number,
}

type TableRows = SingleTableRow[];

interface Column {
    name: string;
    align?: TableCellProps['align'] | null;
}

export type Columns = Column[];

export interface AssetTableProps {
    header: string;
    rows: TableRows;
    total: number;
    columns?: Columns;
}