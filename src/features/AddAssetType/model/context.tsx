import { createContext } from 'react';
import { initialState } from './state';
import { useAssets } from './useAssets';

export const AssetsContext = createContext({ state: initialState, addTable: (newTable: string) => {} });

export const TableProvider = ({ children }) => {
    const { state, addTable } = useAssets();

    return (
      <AssetsContext.Provider value={{ state, addTable }}>
        {children}
      </AssetsContext.Provider>
    );
};