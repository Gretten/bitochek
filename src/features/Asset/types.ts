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