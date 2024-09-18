export const getTotal = (rows) => {
    return rows.reduce((acc, item) => {
        return acc += item.sum;
    }, 0)
}