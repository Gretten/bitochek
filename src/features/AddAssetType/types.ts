interface Row {
    [key: string]: string;
}
  
export interface Tables {
    rows: Row[];
    total: number;
}
  
export interface State {
    tables: Tables | {};
}