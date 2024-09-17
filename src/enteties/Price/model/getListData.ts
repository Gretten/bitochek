export const getListData  = (currencies, volatiles, totalPrice) => {
    const toRender: { name: string, value: number }[] = [];

    for(let currency in currencies) {
        const name = currencies[currency];
        const value = volatiles[name] * totalPrice;

        toRender.push({
            name, value
        })
    }

    return toRender;
}