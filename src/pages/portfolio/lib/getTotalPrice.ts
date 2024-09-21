import { AssetsState } from "@/features/AddAssetType/types";

export const getTotalPrice = (assets: AssetsState): number => {
    if(!assets) {
        return 0;
    }

    return Object.values(assets).reduce((acc, el) => {
        const subsum = el.assets.reduce((acc, el) => {
            return acc += Number(el.sum)
        }, 0)

        return acc += subsum;
    }, 0)
}