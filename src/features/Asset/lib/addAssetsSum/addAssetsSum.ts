export const addAssetsSum = (assets) => {
    if(Array.isArray(assets)) {
      return assets.map((asset) => {

        const { price, count } = asset;
        const sum = price * count;

        return {
          ...asset,
          sum,
        }
      })
    }

    return {
      ...assets,
      sum: assets.price + assets.count,
    }

  }