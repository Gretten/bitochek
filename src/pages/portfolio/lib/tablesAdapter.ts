import { names } from "@/widgets/AssetsWidget/config";
import { TableRow } from '@/shared/ui/AssetTable/types';

export const tablesAdapter = (tables): TableRow[] | null  => {
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