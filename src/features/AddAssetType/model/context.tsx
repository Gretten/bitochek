import { createContext } from 'react';
import { initialState } from './state';
import { useAssets } from './useAssets';

export const AssetsContext = createContext({ 
  tables: initialState.tables, 
  total: initialState.total,
  addTable: (newTable: string) => {}, 
  addAsset: (asset: Record<string, string>) => {}
});

export const TableProvider = ({ children }) => {
    const { tables, total, addTable, addAsset } = useAssets();

    return (
      <AssetsContext.Provider value={{ tables, total, addTable, addAsset }}>
        {children}
      </AssetsContext.Provider>
    );
};