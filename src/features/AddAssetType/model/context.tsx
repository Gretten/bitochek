import { createContext } from 'react';
import { initialState } from './state';
import { useAssets } from './useAssets';

export const AssetsContext = createContext({ 
  state: initialState, 
  addTable: (newTable: string) => {}, 
  addAsset: (asset: Record<string, string>) => {}
});

export const TableProvider = ({ children }) => {
    const { state, addTable, addAsset } = useAssets();

    return (
      <AssetsContext.Provider value={{ state, addTable, addAsset }}>
        {children}
      </AssetsContext.Provider>
    );
};