import { createContext } from 'react';
import { initialState } from './state';
import { useAssets } from './useAssets';

export const AssetsContext = createContext({ 
  tables: initialState.tables, 
  addTable: (newTable: string) => {}, 
  addAsset: (asset: Record<string, string>) => {}
});

export const TableProvider = ({ children }) => {
    const { tables, addTable, addAsset } = useAssets();

    return (
      <AssetsContext.Provider value={{ tables, addTable, addAsset }}>
        {children}
      </AssetsContext.Provider>
    );
};