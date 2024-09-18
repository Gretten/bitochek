export const addAssetsSum = (assets) => {
    return assets.map((asset) => {

      const { price, count } = asset;
      const sum = price * count;

      return {
        ...asset,
        sum,
      }
    })
  }