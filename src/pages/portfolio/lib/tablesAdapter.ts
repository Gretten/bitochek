import { names } from "@/widgets/AssetsWidget/config";
import { Tables } from "@/features/AddAssetType/types";
import { Table } from "@/widgets/AssetsWidget/ui/AssetsWidget";

export const tablesAdapter = (tables: {} | Tables): Table[] | null  => {
    const data = Object.entries(tables);
    
    if(!tables || !data.length) return null;
                    
    return data.map((table) => {
        const name = names[table[0]];
        const { rows, total } = table[1];

        return {
            name,
            rows,
            total,
        }
    })
}