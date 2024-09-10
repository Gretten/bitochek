
const apiClient = {
    get: async function<T> ({path: string, isMock: boolean}) {
        return Promise<T>
    }
}

export const getPrices = async () => {
    return await apiClient.get({path: 'assets/prices', isMock: true});
}