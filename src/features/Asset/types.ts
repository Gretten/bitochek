// interface Row {
//     [key: string]: string;
// }
  
// export interface Tables {
//     rows: Row[];
//     total: number;
// }
  
// export interface State {
//     tables: Tables | {};
// }

export type Asset = {
    price: number;
    count: number;
    name: string;
    sum: number;
};

export interface AssetsState {
    [key: string]: { 
        assets: Asset[];
        total: number;
    }
}