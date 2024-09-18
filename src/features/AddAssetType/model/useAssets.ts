import { useReducer } from "react";
import { initialState, reducer } from "./state";

export const useAssets = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addTable = (newTable) => {
        dispatch({ type: 'ADD_TABLE', payload: newTable });
    };

    const addAsset = (asset) => {
        dispatch({ type: 'ADD_ASSET', payload: asset });
    }

    return { tables: state.tables, total: state.total, addTable, addAsset }
  
}