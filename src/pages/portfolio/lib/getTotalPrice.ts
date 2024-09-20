export const getTotalPrice = (tablesData): number => {
    if(!tablesData) return 0;
    
    return tablesData.reduce((acc, table) => {
            return acc += table.total;
        }, 0)
}