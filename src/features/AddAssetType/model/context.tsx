import { createContext } from 'react';
import { initialState } from './state';
import { useAssets } from './useAssets';
import { Asset } from '../types';

export const AssetsContext = createContext({ 
  addTable: (newTable: string) => {}, 
  addAsset: <T extends Record<keyof Asset & { type: string }, any>>(asset: T) => {},
  removeAsset: <T extends Record<keyof Asset & { type: string }, any>>(asset: T) => {},
  assets: initialState,
});

export const TableProvider = ({ children }) => {
    const { assets, addTable, addAsset, removeAsset } = useAssets();

    return (
      <AssetsContext.Provider value={{ assets, addTable, addAsset, removeAsset }}>
        {children}
      </AssetsContext.Provider>
    );
};