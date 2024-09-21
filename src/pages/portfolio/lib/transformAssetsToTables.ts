import { names } from "@/widgets/AssetsTableWidget/config";
import { AssetsState } from "@/features/Asset/types";
import { Table } from "@/widgets/AssetsTableWidget/ui/AssetsTableWidget";

export const transformAssetsToTables = (assets: AssetsState | {}): Table[] | null => {
    if(!assets) {
        return null;
    }

    const data = Object.entries(assets) as [string, { assets: Record<string, string | number>[]}][];
    
    if(!data.length) return null;
                    
    return data.map((asset) => {
        const name = names[asset[0]];
        const { assets } = asset[1];
        const total = assets.reduce((acc, asset) => {
            return acc += Number(asset.sum)
        }, 0)


        return {
            header: name,
            rows: assets,
            total,
        }
    })
}
